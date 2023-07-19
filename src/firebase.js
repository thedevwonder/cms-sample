// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyvjBsNtdgaplBTi_49vW5bYyaxSmwsfs",
  authDomain: "content-dashboard-76380.firebaseapp.com",
  projectId: "content-dashboard-76380",
  storageBucket: "content-dashboard-76380.appspot.com",
  messagingSenderId: "592312445656",
  appId: "1:592312445656:web:da8aa0bc9fdc5668ae45ad",
  measurementId: "G-KETWNWND6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;