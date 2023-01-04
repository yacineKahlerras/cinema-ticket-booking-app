import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/googleAuth";
import { getMoviesList } from "./firebase/dataFetcher";
import { moviesListObject } from "./data";
import { CreateMovieDoc } from "./firebase/databaseSetup";
import { cinemasListObject } from "./data";

export const UserContext = createContext();
export const MoviesListContext = createContext();
export const CinemaDataContext = createContext();

export default function App() {
  const [user, setUser] = useState({});
  const [moviesList, setMoviesList] = useState(moviesListObject);
  const [cinemasListData, setCinemasListData] = useState(cinemasListObject);

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
        <CinemaDataContext.Provider
          value={{
            cinemasListData: cinemasListData,
            setCinemasListData: setCinemasListData,
          }}
        >
          <main>
            <Nav />
            <Outlet />
          </main>
        </CinemaDataContext.Provider>
      </MoviesListContext.Provider>
    </UserContext.Provider>
  );
}
