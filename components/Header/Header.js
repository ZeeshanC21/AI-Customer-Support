"use client";

import React, { useContext, useState } from 'react';
import styles from './styles.module.css'; 
import SignUpModal from '../SignUpModal/SignUpModal.js';
import { AuthContext } from '../../app/firebase/auth';
import Chatbot from '../../app/chatBot';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatbotVisible, setIsChatbotVisible] = useState(true); // Set to true for testing
  const { authUser, signOutUser } = useContext(AuthContext);

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignOut = async () => {
    await signOutUser();
  };

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <header className={styles.header} id="header">
      <div className={styles.nav}>
        <h1 className={styles.h1}>CHATMATE</h1>
        {authUser ? (
          <button className={styles.button} onClick={handleSignOut}>
            SIGN OUT
          </button>
        ) : (
          <button className={styles.button} onClick={openModal}>
            FREE TRIAL
          </button>
        )}
      </div>
      {isModalOpen && <SignUpModal closeModal={closeModal} />}
      <div className={styles.chatbotIcon} onClick={toggleChatbot}>
        <img src="/chatboticon.png" alt="Chatbot Icon" className={styles.iconImage} />
      </div>
      {isChatbotVisible && (
        <div className={styles.chatbotContainer}>
          <Chatbot />
        </div>
      )}
    </header>
  );
};

export default Header;
