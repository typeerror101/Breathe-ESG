// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLKvHGt77WUN3AeKb1WVhJf0HQhIAHFec",
  authDomain: "breatheesg-aa6ea.firebaseapp.com",
  projectId: "breatheesg-aa6ea",
  storageBucket: "breatheesg-aa6ea.appspot.com",
  messagingSenderId: "840142391085",
  appId: "1:840142391085:web:0f845993e1a6acf77cf5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}