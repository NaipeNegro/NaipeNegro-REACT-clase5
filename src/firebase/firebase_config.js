// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}   from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCby5Cp9d8W2x4SaUEPuOum72uXraPVJeU",
  
  authDomain: "coderhouse-react-lego.firebaseapp.com",
  projectId: "coderhouse-react-lego",
  storageBucket: "coderhouse-react-lego.appspot.com",
  messagingSenderId: "702549128661",
  appId: "1:702549128661:web:ae9830ce6541e05ab7395c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

