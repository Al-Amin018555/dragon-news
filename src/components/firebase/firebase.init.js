// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4JO2aJBUc7qS_GH53q63EGF8vYw1wgOk",
  authDomain: "dragon-news-f03ed.firebaseapp.com",
  projectId: "dragon-news-f03ed",
  storageBucket: "dragon-news-f03ed.firebasestorage.app",
  messagingSenderId: "704804324962",
  appId: "1:704804324962:web:85532ad52d12817987733b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;