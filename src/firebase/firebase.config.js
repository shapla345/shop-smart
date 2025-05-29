// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey ,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId 
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// VITE_apiKey= AIzaSyAkfyPPbavKFLAfQe8aauY8MqvvzxDDWP4
// VITE_authDomain= online-shop-c37a8.firebaseapp.com
// VITE_projectId= online-shop-c37a8
// VITE_storageBucket= online-shop-c37a8.firebasestorage.app
// VITE_messagingSenderId= 482534063848
// VITE_appId= 1:482534063848:web:dda0f8a892d3fa0521135d