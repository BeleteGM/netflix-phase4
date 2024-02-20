// import { createContext, useContext, useState, useEffect } from "react";
// import { auth } from './Firebase/Firebase';
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// const AuthContext = createContext();
// export function AuthContextProvider({ children }) {
//   const [User, setUser] = useState({});
//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser)
//     });

//     return () => {
//       unsubscribe();
//     };
//   });

//   return (
//     <AuthContext.Provider value={{ signUp, login, logOut,User}}>
//       {children}
//     </AuthContext.Provider>
//   );

//   }
// export function UserAuth() {
//   return useContext(AuthContext);
// }

import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {firebaseConfig} from "./Firebase/Firebase";

// Initialize Firebase app
initializeApp(firebaseConfig);
const auth = getAuth();

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  function signUp(FirstName, SecondName,email, password) {
    return createUserWithEmailAndPassword(auth,FirstName,SecondName, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, login, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}