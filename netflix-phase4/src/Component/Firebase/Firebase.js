// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArgmrFwevaoSHGyyt_p6Jqyzjgxo73gtw",
  authDomain: "netflex-clone-project-128c8.firebaseapp.com",
  projectId: "netflex-clone-project-128c8",
  storageBucket: "netflex-clone-project-128c8.appspot.com",
  messagingSenderId: "986824675371",
  appId: "1:986824675371:web:7fd4efac487da3e2299a6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
