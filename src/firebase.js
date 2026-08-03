import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVN8ixNdbk1dMU93gU-SSF2QiK7Daq5BA",
  authDomain: "portfolio-936df.firebaseapp.com",
  projectId: "portfolio-936df",
  storageBucket: "portfolio-936df.appspot.com",
  messagingSenderId: "792269990102",
  appId: "1:792269990102:web:c1a515b04d8f8c7568c177",
  measurementId: "G-7VB3XG0TDR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
