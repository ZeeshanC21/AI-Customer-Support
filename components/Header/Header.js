"use client"; 

import React, { useState } from 'react';
import styles from './styles.module.css'; 
import SignUpModal from '../SignUpModal/SignUpModal.js'; 

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <h1 className={styles.h1}>chatmate</h1>
        <button className={styles.button} onClick={openModal}>
          FREE TRIAL
        </button>
      </div>
      {isModalOpen && <SignUpModal closeModal={closeModal} />} 
      {isModalOpen && <div className={styles.overlay}></div>} 
    </header>
  );
};

export default Header;
