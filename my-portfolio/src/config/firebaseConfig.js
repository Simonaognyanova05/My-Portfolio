import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaofxcj-gb5GLDFuyZH-eP0I4csDD8rt0",
  authDomain: "my-portfolio-9d869.firebaseapp.com",
  projectId: "my-portfolio-9d869",
  storageBucket: "my-portfolio-9d869.firebasestorage.app",
  messagingSenderId: "446278910454",
  appId: "1:446278910454:web:89e602ada61e1f849047d7",
  measurementId: "G-XJX3B3690C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
