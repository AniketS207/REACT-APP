// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRgHC1p3TcZ0M-9DkfHzsoahNrWpQFRRA",
    authDomain: "database-4834e.firebaseapp.com",
    projectId: "database-4834e",
    storageBucket: "database-4834e.appspot.com",
    messagingSenderId: "663089767963",
    appId: "1:663089767963:web:a86872583ebe2836a93abe"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
