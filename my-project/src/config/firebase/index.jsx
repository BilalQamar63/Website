// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoCX6kGJBDBYEw7h8AxDCsZW84w8_CVuE",
  authDomain: "website123-ad369.firebaseapp.com",
  projectId: "website123-ad369",
  storageBucket: "website123-ad369.appspot.com",
  messagingSenderId: "347902507345",
  appId: "1:347902507345:web:cffba9be4e4348ef3b7b70"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export {firebase_app, auth}