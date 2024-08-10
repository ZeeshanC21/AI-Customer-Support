import Head from 'next/head';
import Header from './componants/Header/page';
import HeroSection from './componants/HeroSection/page';
import ChatbotUsesSection from './componants/ChatbotUsesSection/page';
import UnderSliderSection from './componants/UnderSliderSection/page'


export default function Home() {
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
    </div>
  );
}
