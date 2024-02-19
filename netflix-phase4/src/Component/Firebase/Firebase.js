
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjD1StWWP1B9ux8027mQmpYBYoNR_dLbM",
  authDomain: "netflex-react-yt21.firebaseapp.com",
  projectId: "netflex-react-yt21",
  storageBucket: "netflex-react-yt21.appspot.com",
  messagingSenderId: "174871416733",
  appId: "1:174871416733:web:ddfeb65825f50199426974",
  measurementId: "G-DPEP58DF4L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);