// components/SignUpModal/SignUpModal.js
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../app/firebase/firebasePage'; // Updated import path
import { useAuth } from '../../app/firebase/auth'; // Updated import path
import CompleteSignUp from '../SignUpACompany/SignUpACompany';
import styles from './styles.module.css';


const SignUpModal = ({ closeModal }) => {
  const { authUser, isLoading } = useAuth();
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      setEmail(result.user.email);
      setIsStepTwo(true);
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  const handleEmailSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      setIsStepTwo(true);
    } catch (error) {
      console.error("Email Sign-Up error:", error);
    }
  };

  const handleBackToStepOne = () => {
    setIsStepTwo(false);
  };

  return (
    <>
      {isStepTwo ? (
        <CompleteSignUp email={email} handleBack={handleBackToStepOne} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20">
          <div className="bg-white p-8 rounded-lg w-96 relative flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Sign up for a 14 day free trial</h2>
            <button
              className="bg-blue-500 text-white w-full py-2 mb-2 rounded"
              onClick={handleGoogleSignIn}
            >
              Sign up with Google
            </button>
            <div className="flex items-center justify-between mb-4 w-full">
              <hr className="w-full border-gray-300"/>
              <span className="px-2 text-gray-500">or</span>
              <hr className="w-full border-gray-300"/>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 mb-2 w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 mb-2 w-full"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 p-2 mb-4 w-full"
              required
            />
            <button
              className="bg-black text-white w-full py-2 mb-4 rounded"
              onClick={handleEmailSignUp}
            >
              Sign up with email
            </button>
            <p className="text-sm text-gray-500 mb-4 text-center">
              By signing up, I accept the Freshworks Terms of Service and Privacy Notice.
            </p>
            <p className="text-sm text-gray-500 mb-4 text-center">
              Your data will be located in Middle East & Africa <span className="text-blue-500">Change</span>
            </p>
            <button
              className="absolute bottom-4 text-blue-500"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
