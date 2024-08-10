"use client"; // Add this line at the top
import Head from 'next/head';
import { useState } from 'react';
import Header from './componants/Header/page';
import HeroSection from './componants/HeroSection/page';
import ChatbotUsesSection from './componants/ChatbotUsesSection/page';
import UnderSliderSection from './componants/UnderSliderSection/page'
import Chatbot from './componants/chatBotSection/page';

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div>
      <Head>
        <title>Freshchat</title>
        <meta name="description" content="Freshchat AI chatbot page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <ChatbotUsesSection />
      <UnderSliderSection/>

      {/* Button to toggle Chatbot visibility */}
      <button onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>

      {/* Conditionally render Chatbot */}
      {showChatbot && <Chatbot />}
    </div>
  );
}
