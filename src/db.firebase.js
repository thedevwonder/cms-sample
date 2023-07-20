import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyvjBsNtdgaplBTi_49vW5bYyaxSmwsfs",
  authDomain: "content-dashboard-76380.firebaseapp.com",
  projectId: "content-dashboard-76380",
  storageBucket: "content-dashboard-76380.appspot.com",
  messagingSenderId: "592312445656",
  appId: "1:592312445656:web:da8aa0bc9fdc5668ae45ad",
  measurementId: "G-KETWNWND6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
