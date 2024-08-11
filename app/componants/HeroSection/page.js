import React from 'react';
import styles from './styles.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSectionWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className="text-5xl font-bold mb-6">Enhance your customer experience with a conversational bot</h1>
            <p className="text-2xl mb-8">
              Offer high-quality customer experiences that can scale with your business over time with Freshchat.
            </p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded text-xl mb-4">Start Free Trial</button>
            <div className={styles.badgesContainer}>
              <img className={styles.badge} src="/firstBadge.png" alt="the first badge" />
              <img className={styles.badge} src="/secondBadge.png" alt="the second badge" />
              <img className={styles.badge} src="/thirdBadge.png" alt="the third badge" />
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/HeroSectionPic.jpg" alt="Hero Section Image" />
            <div style={{ width: '100%', height: 0, paddingBottom: '56%', position: 'relative' }}>
              <iframe 
                src="https://giphy.com/embed/HAUxypcipk4AvnHdp0" 
                width="100%" 
                height="100%" 
                style={{ position: 'absolute', bottom: '200px', left: '200px' }} 
                frameBorder="0" 
                className="giphy-embed" 
                allowFullScreen 
                title="Chatbot GIF"
              ></iframe>
            </div>
            <p><a href="https://giphy.com/gifs/chatbot-multifamily-perq-HAUxypcipk4AvnHdp0"></a></p>
          </div>
        </div>
        <div className={styles.centeredParagraph}>
          <p>Trusted by 60,000+ Businesses</p>
        </div>
        <div className={styles.Brands}>
          <img src="/firstBrand.png" alt="First Brand" />
          <img src="/secondBrand.png" alt="Second Brand" />
          <img src="/thirdBrand.png" alt="Third Brand" />
          <img src="/fourthBrand.png" alt="Fourth Brand" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
