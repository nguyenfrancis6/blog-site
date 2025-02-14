import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOBkOomZV28_3stigVA7c2gI_LekNLq48",
  authDomain: "full-stack-react-4dc7c.firebaseapp.com",
  projectId: "full-stack-react-4dc7c",
  storageBucket: "full-stack-react-4dc7c.firebasestorage.app",
  messagingSenderId: "183522321823",
  appId: "1:183522321823:web:1fb1824cf7a4be50b4c9aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
