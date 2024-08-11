import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

const UnderSliderSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-3xl font-bold mb-4">Integrations made easy</p>
          <p className="text-lg text-gray-700">
            Connect Freshchat with all your favorite tools in minutes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* First row of logos */}
          <div className="w-40 h-40 flex items-center justify-center">
            <Image src="/shopify.png" alt="Shopify Logo" width={160} height={160} />
          </div>
          <div className="w-40 h-40 flex items-center justify-center">
            <Image src="/wooCommerce.png" alt="WooCommerce Logo" width={160} height={160} />
          </div>
          <div className="w-40 h-40 flex items-center justify-center">
            <Image src="/wordPress.png" alt="WordPress Logo" width={160} height={160} />
          </div>
          <div className="w-40 h-40 flex items-center justify-center">
            <Image src="/clearbit.png" alt="Clearbit Logo" width={160} height={160} />
          </div>
          <div className="w-40 h-40 flex items-center justify-center">
            <Image src="/Hubspot.png" alt="Hubspot Logo" width={160} height={160} />
          </div>
          <div className="w-40 h-40 flex items-center justify-center">
            <Image src="/Slack.png" alt="Slack Logo" width={160} height={160} />
          </div>

          {/* Second row of logos */}
          <div className="w-full flex justify-center gap-8 mt-1">
            <div className="w-40 h-40 flex items-center justify-center">
              <Image src="/TeamViewer.png" alt="TeamViewer Logo" width={160} height={160} />
            </div>
            <div className="w-40 h-40 flex items-center justify-center">
              <Image src="/MS_Dynamics.png" alt="MS Dynamics Logo" width={160} height={160} />
            </div>
            <div className="w-40 h-40 flex items-center justify-center">
              <Image src="/MailChimp.png" alt="MailChimp Logo" width={160} height={160} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderSliderSection;
