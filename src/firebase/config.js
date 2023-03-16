// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO4rlrH3Zafr324o1pmC7goqGcj-D888g",
  authDomain: "react-auth-8f5ac.firebaseapp.com",
  projectId: "react-auth-8f5ac",
  storageBucket: "react-auth-8f5ac.appspot.com",
  messagingSenderId: "565743843728",
  appId: "1:565743843728:web:0183dec86c08deb5a19b15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
