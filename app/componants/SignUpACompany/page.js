import React, { useState } from 'react';
import styles from './styles.module.css'; 

const CompleteSignUp = ({ email, handleBack }) => {
  const [companyName, setCompanyName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const handleSignUp = () => {
    // Handle the sign-up process
    console.log({ companyName, phoneNo });
    // Proceed with further steps like submitting to Firebase or showing a success message
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20">
      <div className="bg-white p-8 rounded-lg w-96 relative flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Sign up for a 14 day free trial</h2>

        <p className="text-lg mb-4">{email}</p>

        <button
          className="text-blue-500 mb-4"
          onClick={handleBack}
        >
          Change email
        </button>

        <input
          type="text"
          placeholder="Company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="border border-gray-300 p-2 mb-1 w-full"
          required
        />
        <p className="text-red-500 text-sm mb-4">Please tell us where you work</p>

        <input
          type="text"
          placeholder="Phone No"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="border border-gray-300 p-2 mb-1 w-full"
          required
        />
        <p className="text-red-500 text-sm mb-4">Product Name</p>

        <button
          className="bg-black text-white w-full py-2 mb-4 rounded"
          onClick={handleSignUp}
        >
          Sign up now
        </button>

        <p className="text-sm text-gray-500 mb-4 text-center">
          By signing up, I accept the Freshworks Terms of Service and Privacy Notice.
        </p>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Your data will be located in Middle East & Africa <span className="text-blue-500">Change</span>
        </p>
      </div>
    </div>
  );
};

export default CompleteSignUp;
