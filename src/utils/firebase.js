// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk3trS_mTf38VULxqIHESYWLDuPNTwuxc",
  authDomain: "netflixgpt-6f252.firebaseapp.com",
  projectId: "netflixgpt-6f252",
  storageBucket: "netflixgpt-6f252.appspot.com",
  messagingSenderId: "628131701477",
  appId: "1:628131701477:web:137bb31284de8195816a0c",
  measurementId: "G-2WCEQ5FL6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);