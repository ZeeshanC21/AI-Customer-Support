"use client"; // Add this line at the top
import Head from 'next/head';
import { useState } from 'react';
<<<<<<< HEAD
import Header from '../components/Header/Header.js';
import HeroSection from '../components/HeroSection/HeroSection.js';
import ChatbotUsesSection from '../components/ChatbotUsesSection/chatBotUses.js';
import UnderSliderSection from '../components/UnderSliderSection/UnderSliderSection.js';
import Overview from '@/components/overview/overview.js';
import Chatbot from './chatBot.js';
=======
import Header from './componants/Header/page';
import HeroSection from './componants/HeroSection/page';
import ChatbotUsesSection from './componants/ChatbotUsesSection/page';
import UnderSliderSection from './componants/UnderSliderSection/page'
import Chatbot from './componants/chatBotSection/page';
>>>>>>> 7343c17dc78c4a5e2184c1f673562bfb5c888656

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
<<<<<<< HEAD
      <Overview/>
=======

>>>>>>> 7343c17dc78c4a5e2184c1f673562bfb5c888656
      {/* Button to toggle Chatbot visibility */}
      <button onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>

      {/* Conditionally render Chatbot */}
      {showChatbot && <Chatbot />}
    </div>
  );
}
