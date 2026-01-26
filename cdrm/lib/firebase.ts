// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCzchKeOvIRS5JeV-2nXQtd6PauF8b_YnA",
  authDomain: "cdrm-app.firebaseapp.com",
  projectId: "cdrm-app",
  storageBucket: "cdrm-app.firebasestorage.app",
  messagingSenderId: "761961895421",
  appId: "1:761961895421:web:32de0a780e700c46caf594",
};

// Initialize Firebase (singleton)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Export auth & firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
