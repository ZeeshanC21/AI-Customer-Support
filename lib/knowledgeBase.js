const knowledgeBase = [
  {
    id: 1,
    title: "ChatMate Overview",
    content: "ChatMate is an advanced AI-powered customer support chatbot designed to provide instant, accurate, and empathetic responses to customer inquiries. It integrates seamlessly with multiple platforms and learns continuously to improve its interactions."
  },
  {
    id: 2,
    title: "Product Capabilities",
    content: "ChatMate offers a wide range of features, including natural language processing, sentiment analysis, and multilingual support. It can handle a variety of customer queries, from simple FAQs to complex troubleshooting."
  },
  {
    id: 3,
    title: "Troubleshooting with ChatMate",
    content: "If ChatMate isn't responding as expected, try checking your internet connection, verifying your API keys, or restarting the integration. For persistent issues, our support team is ready to assist."
  },
  {
    id: 4,
    title: "Pricing and Subscription Plans",
    content: "ChatMate offers flexible pricing tiers to suit businesses of all sizes. Our Basic plan is ideal for small businesses, while the Pro and Enterprise plans offer enhanced features and dedicated support."
  },
  {
    id: 5,
    title: "Security and Data Privacy",
    content: "ChatMate is committed to safeguarding your data. We utilize cutting-edge encryption technologies and adhere to strict data protection regulations to ensure that all customer interactions are secure and confidential."
  },
  {
    id: 6,
    title: "Integration with Business Tools",
    content: "ChatMate can be easily integrated with popular business tools like Slack, Salesforce, and Zendesk. This allows for streamlined communication and support, making it easier to manage customer interactions across different channels."
  },
  {
    id: 7,
    title: "AI-Powered Analytics",
    content: "ChatMate provides detailed analytics on customer interactions, helping businesses to understand trends, customer sentiment, and areas for improvement. These insights enable proactive customer service and strategic decision-making."
  },
  {
    id: 8,
    title: "Customization Options",
    content: "ChatMate is highly customizable, allowing businesses to tailor the chatbot’s tone, personality, and response patterns to align with their brand voice and customer service goals."
  },
  {
    id: 9,
    title: "Multilingual Support",
    content: "ChatMate can communicate with customers in multiple languages, making it an ideal solution for businesses operating globally. It supports over 50 languages and offers real-time translation capabilities."
  },
  {
    id: 10,
    title: "24/7 Customer Support",
    content: "ChatMate is available 24/7, ensuring that customers receive timely assistance regardless of time zones. This round-the-clock availability enhances customer satisfaction and loyalty."
  },
  {
    id: 11,
    title: "Onboarding and Training",
    content: "We provide comprehensive onboarding and training for ChatMate, ensuring that your team is fully equipped to leverage all of its features. This includes step-by-step guides, video tutorials, and live training sessions."
  },
  {
    id: 12,
    title: "Case Studies",
    content: "Explore case studies showcasing how ChatMate has helped businesses across various industries improve customer satisfaction, reduce response times, and increase efficiency."
  },
  {
    id: 13,
    title: "Customer Feedback and Reviews",
    content: "ChatMate regularly gathers customer feedback to continually enhance its performance. Read what our customers are saying about their experience with ChatMate."
  },
  {
    id: 14,
    title: "API Documentation",
    content: "Access detailed API documentation to integrate ChatMate with your existing systems. Our comprehensive guides and examples make it easy to get started, whether you’re a beginner or an experienced developer."
  },
  {
    id: 15,
    title: "Compliance and Certifications",
    content: "ChatMate is compliant with industry standards and holds certifications in GDPR, HIPAA, and SOC 2, ensuring that your customer data is handled with the highest level of care and security."
  },
  {
    id: 16,
    title: "User Management and Roles",
    content: "ChatMate allows for granular control over user management, enabling businesses to assign specific roles and permissions to team members, ensuring that everyone has the right access level."
  },
  {
    id: 17,
    title: "Performance Optimization",
    content: "ChatMate continually optimizes its performance through machine learning algorithms, ensuring faster response times and more accurate answers as it learns from each interaction."
  },
  {
    id: 18,
    title: "Scalability",
    content: "ChatMate is built to scale with your business, whether you're handling hundreds or millions of customer interactions. It supports high-volume traffic and can be customized to grow with your needs."
  }

];

export async function searchKnowledgeBase(query) {
  // Implement a more advanced search mechanism, such as semantic search or vector-based retrieval.
  const lowerCaseQuery = query.toLowerCase();
  return knowledgeBase.filter((doc) => 
    doc.title.toLowerCase().includes(lowerCaseQuery) ||
    doc.content.toLowerCase().includes(lowerCaseQuery)
  );
}
