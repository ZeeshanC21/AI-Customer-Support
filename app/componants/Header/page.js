"use client"; 

import React, { useState } from 'react';
import styles from './styles.module.css'; 
import SignUpModal from '../SignUpModal/page'; 

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-white">
      <div className={`flex justify-start items-center p-4 ${styles.nav}`}>
        <h1 className={styles.h1}>chatmate</h1>
        <button className={styles.button} onClick={openModal}>
          FREE TRIAL
        </button>
      </div>
      {isModalOpen && <SignUpModal closeModal={closeModal} />} 
      {isModalOpen && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>} 
    </header>
  );
};

export default Header;
