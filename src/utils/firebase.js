// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDSZgMLzpyc7gvEZlTEq-crDaDOLZAUOKs",
  authDomain: "netflixgpt-4f178.firebaseapp.com",
  projectId: "netflixgpt-4f178",
  storageBucket: "netflixgpt-4f178.appspot.com",
  messagingSenderId: "840529888704",
  appId: "1:840529888704:web:7af02602a07031073ef425",
  measurementId: "G-8CEVQ0T3YC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);