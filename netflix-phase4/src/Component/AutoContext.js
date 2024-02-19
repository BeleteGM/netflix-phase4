import { createContext, useContext, useState, useEffect } from "react";
import { auth } from './Firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AutoContext = createContext();

export function AutoContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
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
    <AutoContext.Provider value={{ signUp, login, logOut, user }}>
      {children}
    </AutoContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AutoContext);
}