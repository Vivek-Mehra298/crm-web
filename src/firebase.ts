// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

 const firebaseConfig = {
  apiKey: "AIzaSyDB7-ImrL0Z-W5dfbR41p3afDt_Z_WbJzs",
  authDomain: "crm-web-app-14632.firebaseapp.com",
  projectId: "crm-web-app-14632",
  storageBucket: "crm-web-app-14632.firebasestorage.app",
  messagingSenderId: "586885471466",
  appId: "1:586885471466:web:2bfb99dd4d12957ecb8b93",
  measurementId: "G-VF5H5RV50L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore(app);