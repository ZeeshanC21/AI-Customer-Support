"use client";

import React, { useContext ,useState} from 'react';
import styles from './styles.module.css'; 
import SignUpModal from '../SignUpModal/SignUpModal.js';
import { AuthContext } from '../../app/firebase/auth'; // Adjust the import path if necessary

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    </header>
  );
};

export default Header;
