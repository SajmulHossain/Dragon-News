// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW6a2D7B-jJo9LekeoF_lJGuT0JEzFSSk",
  authDomain: "dragon-news-6505c.firebaseapp.com",
  projectId: "dragon-news-6505c",
  storageBucket: "dragon-news-6505c.firebasestorage.app",
  messagingSenderId: "25947578189",
  appId: "1:25947578189:web:f0b652b7a96e5534d36104",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;