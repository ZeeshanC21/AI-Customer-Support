import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { searchKnowledgeBase } from '@/lib/knowledgeBase';

// System prompt for the AI assistant
const systemPrompt = `
You are a helpful, friendly, and knowledgeable AI assistant. You provide clear, concise, and professional responses.
If you don't know the answer, it's okay to say so. Provide additional information if relevant and be polite and empathetic.

Example conversation:
User: What is the capital of France?
Assistant: The capital of France is Paris.
User: Who wrote 'To Kill a Mockingbird'?
Assistant: 'To Kill a Mockingbird' was written by Harper Lee.
`;

// Function to select a model based on the task
const selectModel = (task) => {
  switch (task) {
    case 'customer_support':
      return 'gpt-3.5-turbo';
    case 'knowledge_retrieval':
      return 'gpt-4';
    case 'complex_task':
      return 'gpt-4';
    default:
      return 'gpt-3.5-turbo';
  }
};

// Orchestrator for handling complex tasks
const orchestrateTask = async (task, userQuery, openai) => {
  let retrievalContext = '';
  if (task === 'knowledge_retrieval' || task === 'complex_task') {
    const retrievedDocs = await searchKnowledgeBase(userQuery);
    retrievalContext = retrievedDocs.map(doc => doc.content).join("\n\n");
  }

  return {
    model: selectModel(task),
    context: retrievalContext,
  };
};

export async function POST(req) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const data = await req.json();
  const userQuery = data[data.length - 1].content.toLowerCase();

  // Determine the task based on the query
  let task;
  if (userQuery.includes("retrieve")) {
    task = 'knowledge_retrieval';
  } else if (userQuery.includes("complex")) {
    task = 'complex_task';
  } else {
    task = 'customer_support';
  }

  // Orchestrate the task and retrieve necessary context
  const { model, context } = await orchestrateTask(task, userQuery, openai);

  // Create the completion with the selected model and context
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: `${systemPrompt}\n\nUse the following information if relevant:\n\n${context}` },
      ...data,
    ],
    model: model,
    stream: true,
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream);
}
