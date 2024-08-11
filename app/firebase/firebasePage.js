import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpsCDOpril_cdoTDxWSziu20aaX3clHl4",
  authDomain: "ai-customer-support-1b0ca.firebaseapp.com",
  projectId: "ai-customer-support-1b0ca",
  storageBucket: "ai-customer-support-1b0ca.appspot.com",
  messagingSenderId: "905669158088",
  appId: "1:905669158088:web:74a6a3d18c4a6fe26531fd",
  measurementId: "G-QF1RJDBR05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);