// app/firebase/auth.js
"use client"; // Ensure this file runs on the client side

import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebasePage'; // Import the correct auth object from firebasePage

export const AuthContext = createContext({
  authUser: null,
  isLoading: true,
  signInWithGoogle: () => {},
  signOutUser: () => {}
});

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async (user) => {
    setIsLoading(true);

    if (!user) {
      setAuthUser(null);
      setIsLoading(false);
    } else {
      setAuthUser({
        uid: user.uid,
        name: user.displayName,
        email: user.email
      });
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setAuthUser(null);
      setIsLoading(false);
    } catch (err) {
      console.log("Sign out error:", err);
    }
  };

  useEffect(() => {
    if (!auth) {
      console.error('Firebase auth is not initialized');
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    setAuthUser,
    isLoading,
    setIsLoading,
    signInWithGoogle,
    signOutUser
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useFirebaseAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
