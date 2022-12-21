import Nav from "./components/Home/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/googleAuth";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}
