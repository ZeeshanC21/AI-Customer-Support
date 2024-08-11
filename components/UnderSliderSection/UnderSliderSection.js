
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

const UnderSliderSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.textCenter} ${styles.mb12}`}>
          <p className={`${styles.text3xl} ${styles.fontBold} ${styles.mb4}`}>
            Integrations made easy
          </p>
          <p className={`${styles.textLg} ${styles.textGray700}`}>
            Connect Freshchat with all your favorite tools in minutes.
          </p>
        </div>

        <div className={`${styles.flex} ${styles.flexWrap} ${styles.justifyCenter} ${styles.gap8}`}>
          {/* First row of logos */}
          <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
            <Image src="/shopify.png" alt="Shopify Logo" width={160} height={160} />
          </div>
          <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
            <Image src="/wooCommerce.png" alt="WooCommerce Logo" width={160} height={160} />
          </div>
          <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
            <Image src="/wordPress.png" alt="WordPress Logo" width={160} height={160} />
          </div>
          <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
            <Image src="/clearbit.png" alt="Clearbit Logo" width={160} height={160} />
          </div>
          <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
            <Image src="/Hubspot.png" alt="Hubspot Logo" width={160} height={160} />
          </div>
          <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
            <Image src="/Slack.png" alt="Slack Logo" width={160} height={160} />
          </div>

          {/* Second row of logos */}
          <div className={`${styles.wFull} ${styles.flex} ${styles.justifyCenter} ${styles.gap8} ${styles.mt1}`}>
            <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
              <Image src="/TeamViewer.png" alt="TeamViewer Logo" width={160} height={160} />
            </div>
            <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
              <Image src="/MS_Dynamics.png" alt="TeamViewer Logo" width={160} height={160} />
            </div>
            <div className={`${styles.w40} ${styles.h40} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
              <Image src="/MailChimp.png" alt="TeamViewer Logo" width={160} height={160} />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderSliderSection;