"use client"; // Add this line at the top
import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header/Header.js';
import HeroSection from '../components/HeroSection/HeroSection.js';
import ChatbotUsesSection from '../components/ChatbotUsesSection/chatBotUses.js';
import UnderSliderSection from '../components/UnderSliderSection/UnderSliderSection.js';
import Overview from '@/components/overview/overview.js';
import Chatbot from './chatBot.js';

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
      <Overview/>
      {/* Button to toggle Chatbot visibility */}
      <button onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>

      {/* Conditionally render Chatbot */}
      {showChatbot && <Chatbot />}
    </div>
  );
}
