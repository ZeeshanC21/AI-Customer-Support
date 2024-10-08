import { useRef,useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Script from 'next/script';
import SignUpModal from '../SignUpModal/SignUpModal.js'; 

export default function Overview() {
  const itypedRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToHeader = () => {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <h2 id="heading" className={styles.heading}>OVERVIEW</h2>
      <div className={styles.main_container}>
        <h1>What does a conversational AI chatbot offer your business?</h1>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=79271&format=png&color=000000"
            alt="Real-time resolutions"
            width={100}
            height={100}
          />
          <h2 style={{fontWeight: 'bold',fontSize: '20px'}}>Real-time resolutions</h2>
          <p className={styles.overviewParagraph}>Live chat software uses the technique of asynchronous messaging that allows customers and agents to have concurrent conversations at their preferred pace. Customers don’t have to start a new conversation every time they talk to a representative; they can jump right back into where they left off.</p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=48485&format=png&color=000000"
            alt="Personalized interactions"
            width={100}
            height={100}
          />
          <h2 style={{fontWeight: 'bold',fontSize: '20px'}}>Personalized interactions</h2>
          <p className={styles.overviewParagraph}>Customers can get tailor-made experiences with messaging software. They get to choose their favourite platform to interact with businesses, whether it’s through the company’s website, WhatsApp, or social media messengers. They can even receive timely updates on products of their interest and feel valued when the business recognizes their needs.</p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=X8sFavbWB9mW&format=png&color=000000"
            alt="Boosts agent efficiency"
            width={100}
            height={100}
          />
          <h2 style={{fontWeight: 'bold',fontSize: '20px'}}>Boosts agent efficiency</h2>
          <p className={styles.overviewParagraph}>Conversational AI bot platforms allow agents to have empathetic interactions with multiple customers simultaneously. With the right setup, agents can also be transparent with customers by setting expectations on wait times and office hours to avoid customer disappointment or frustration.</p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=apeVVtmsp9hB&format=png&color=000000"
            alt="Leverage conversational AI"
            width={100}
            height={100}
          />
          <h2 style={{fontWeight: 'bold',fontSize: '20px'}}>Leverage conversational AI</h2>
          <p className={styles.overviewParagraph}>Messaging software with chatbot capabilities helps agents bypass repetitive questions and focus on pressing issues. These conversational chatbots intuitively detect customer requests and provide intent-specific answers without requiring agent intervention. The chatbot AI undertakes all this with a conversational tone and even engages in small talk.</p>
        </div>
      </div>

      <div className={styles.feature1}>
        <Image
          src="/pic1.png"
          alt="Automate your conversations"
          width={500}
          height={300}
        />
        <div>
          <h1 style={{fontWeight: 'bold',fontSize: '30px'}}>Automate your conversations</h1>
          <p className={styles.overviewParagraph}>AI-powered chatbots are considered the first line of defense in conversational messaging. Freshchat’s conversational AI bots can deflect routine conversations and enable you to build custom flows like setting up meetings or filling forms while maintaining seamless conversations with customers.</p>
        </div>
      </div>

      <div className={styles.feature2}>
        <Image
          src="/pic2.png"
          alt="Data-driven reporting"
          width={500}
          height={300}
        />
        <div>
          <h1 style={{fontWeight: 'bold',fontSize: '30px'}}>Data-driven reporting</h1>
          <p className={styles.overviewParagraph}>What good is AI chatbot software without reporting capabilities? Freshchat offers a real-time dashboard and custom reports with which you can analyze your performance against various metrics and optimize to provide an enhanced support experience.</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <h1>Get started with chatMate today, and never look back</h1>
        <h2>Sign up for a 14-day free trial to get on board with us.</h2>
        <button onClick={scrollToHeader}><p>Start Now!</p></button>
        <p className={styles.overviewParagraph}>Access to full product. No credit card required.</p>
      </footer>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/ityped/1.0.3/index.min.js" strategy="beforeInteractive"></Script>
      <Script src="https://kit.fontawesome.com/8f057d1c6f.js" crossOrigin="anonymous" strategy="beforeInteractive"></Script>
    </div>
  );
}
