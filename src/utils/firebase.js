// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZk-_UdkIAAaFSDPmqCaHW606Fz74RtaQ",
    authDomain: "netflix-gpt-b95e7.firebaseapp.com",
    projectId: "netflix-gpt-b95e7",
    storageBucket: "netflix-gpt-b95e7.appspot.com",
    messagingSenderId: "184187922914",
    appId: "1:184187922914:web:890a6151730b338dfbb1bb",
    measurementId: "G-WGQ5P8YRSD"
  };

// Initialize Firebase

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 const db = getFirestore(app);
 console.log(db)
const analytics = getAnalytics(app);