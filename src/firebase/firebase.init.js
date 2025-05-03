// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUDUMcJjWSOfuD1K8tqM4QNt2CIebMXbI",
  authDomain: "equisports-f9098.firebaseapp.com",
  projectId: "equisports-f9098",
  storageBucket: "equisports-f9098.firebasestorage.app",
  messagingSenderId: "611033239930",
  appId: "1:611033239930:web:467e295cc40814fff386c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth
