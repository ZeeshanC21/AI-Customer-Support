import Image from 'next/image';
import styles from './overview.module.css'; // Adjust the path to your CSS module

export default function Overview() {
  return (
    <div>
      <h2 id="heading">OVERVIEW</h2>
      <div className={styles.container}>
        <h1>What does a conversational AI chatbot offer your business?</h1>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=79271&format=png&color=000000"
            alt="Real-time resolutions"
            width={100}
            height={100}
          />
          <h2>Real-time resolutions</h2>
          <p>Live chat software uses the technique of asynchronous messaging that allows customers and agents to have concurrent conversations at their preferred pace...</p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=48485&format=png&color=000000"
            alt="Personalized interactions"
            width={100}
            height={100}
          />
          <h2>Personalized interactions</h2>
          <p>Customers can get tailor-made experiences with messaging software...</p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=X8sFavbWB9mW&format=png&color=000000"
            alt="Boosts agent efficiency"
            width={100}
            height={100}
          />
          <h2>Boosts agent efficiency</h2>
          <p>Conversational AI bot platforms allow agents to have empathetic interaction with multiple customers simultaneously...</p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=apeVVtmsp9hB&format=png&color=000000"
            alt="Leverage conversational AI"
            width={100}
            height={100}
          />
          <h2>Leverage conversational AI</h2>
          <p>Messaging software with chatbot capabilities helps agents bypass repetitive questions and focus on pressing issues...</p>
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
          <h1>Automate your conversations</h1>
          <p>AI powered Chatbots are considered the first line of defense in conversational messaging...</p>
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
          <h1>Data-driven reporting</h1>
          <p>What good use is ai chatbot software without reporting capabilities? Freshchat offers a real-time dashboard and custom reports...</p>
        </div>
      </div>

      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Our chatBot is</h1>
          <h2><span className="ityped"></span></h2>
        </div>
      </div>

      <footer className={styles.footer}>
        <h1>Get started with chatMate today, and never look back</h1>
        <h2>Sign up for a 14-day free trial to get on board with us.</h2>
        <button>Start Now!</button>
        <p>Access to full product. No credit card required.</p>
      </footer>
    </div>
  );
}
