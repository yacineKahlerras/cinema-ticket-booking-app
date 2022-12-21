import Nav from "./components/Home/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { useEffect, useRef, useState } from "react";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./firebase/firebase-config";

export default function App() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser.email);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function SignIn() {
    signInWithRedirect(auth, provider);
  }

  function LogOut() {
    signOut(auth);
    console.log(user);
  }

  function PrintUser() {
    console.log(user.displayName);
  }

  return (
    <main>
      <button onClick={SignIn}>Sign In</button>
      <button onClick={LogOut}>Log Out</button>
      <button onClick={PrintUser}>Print Current User</button>
    </main>
  );
}
