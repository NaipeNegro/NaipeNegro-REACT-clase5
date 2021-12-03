// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}   from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCby5Cp9d8W2x4SaUEPuOum72uXraPVJeU",
  apiKey: `${process.env.REACT_apiKey}`,
  
  authDomain: `${process.env.REACT_authDomain}`,
  projectId: "coderhouse-react-lego",
  storageBucket: `${process.env.REACT_storageBucket}`,
  messagingSenderId: `${process.env.REACT_messagingSenderId}`,
  appId: `${process.env.REACT_appId}`,


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


