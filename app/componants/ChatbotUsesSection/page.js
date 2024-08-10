import React from 'react';
import styles from './styles.module.css';

const ChatbotUsesSection = () => {
  return (
    <div className={styles.chatbotUsesSection}>
      <h1 className={styles.heading}>Why choose Freshchat for the conversational bot?</h1>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Multi-channel support</h1>
          <p>
            Billions of people use popular messaging apps like WhatsApp, iMessage, LINE, and Facebook Messenger every day. 
            With Freshchat, you can choose to launch conversational support on the apps that your customers prefer using.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.coloredDiv}></div>
            <img src="/secondpic.png" alt="Girl on Chair" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default ChatbotUsesSection;
