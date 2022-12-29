import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/googleAuth";
import { getMoviesList } from "./firebase/dataFetcher";
import { moviesListObject } from "./data";

export const UserContext = createContext();
export const MoviesListContext = createContext();

export default function App() {
  const [user, setUser] = useState({});
  const [moviesList, setMoviesList] = useState(moviesListObject);

  // gets movies list from document database and updates the moviesList state
  useEffect(() => {
    // getMoviesList(setMoviesList);
  });

  // listens to authentification state change and updates the user state
  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    // });
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MoviesListContext.Provider value={moviesList}>
        <main>
          <Nav />
          <Outlet />
        </main>
      </MoviesListContext.Provider>
    </UserContext.Provider>
  );
}
