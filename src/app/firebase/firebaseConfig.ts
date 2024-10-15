import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged   } from "firebase/auth";
import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDJETOpuniySRwXr4kBB39tK5hyeRZsDI",
  authDomain: "first-project-f5cda.firebaseapp.com",
  projectId: "first-project-f5cda",
  storageBucket: "first-project-f5cda.appspot.com",
  messagingSenderId: "581803347371",
  appId: "1:581803347371:web:849b31ce001387e86ad6ee",
  measurementId: "G-L0081003DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged }
export {db, collection, addDoc,getDocs}
