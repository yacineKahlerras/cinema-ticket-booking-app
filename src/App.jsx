import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/googleAuth";
import { CreateCinemaDocs } from "./firebase/databaseSetup";

export const UserContext = createContext();

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
    <UserContext.Provider value={{ user, setUser }}>
      <main>
        <Nav />
        <Outlet />
      </main>
    </UserContext.Provider>
  );
}
