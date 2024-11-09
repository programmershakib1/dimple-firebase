// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM2fLYvHBbEs2F0Kh8oEsCp3ugU5aQGK4",
  authDomain: "dimple-firebase-b181c.firebaseapp.com",
  projectId: "dimple-firebase-b181c",
  storageBucket: "dimple-firebase-b181c.firebasestorage.app",
  messagingSenderId: "618814362728",
  appId: "1:618814362728:web:bda2b3068b1466334097dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);