import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/googleAuth";
import { moviesListObject } from "./data";
import { cinemasListObject } from "./data";
import { getMoviesList } from "@/firebase/dataFetcher";

export const UserContext = createContext();
export const MoviesListContext = createContext();
export const CinemaDataContext = createContext();
export const CurrenMovieScheduleContext = createContext();

export default function App() {
  const [user, setUser] = useState({});
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [moviesList, setMoviesList] = useState(moviesListObject);
  const [cinemasListData, setCinemasListData] = useState(cinemasListObject);
  const [currenMovieSchedule, setCurrenMovieSchedule] = useState();

  // gets movies list from document database and updates the moviesList state
  useEffect(() => {
    getMoviesList(setMoviesList);
  }, []);

  // listens to authentification state change and updates the user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.removeItem("isSignInLoading");
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setIsLoadingUser(true);
    getRedirectResult(auth).then((result) => {
      if (result) setUser(result.user);
      setIsLoadingUser(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoadingUser }}>
      <MoviesListContext.Provider value={moviesList}>
        <CinemaDataContext.Provider
          value={{
            cinemasListData: cinemasListData,
            setCinemasListData: setCinemasListData,
          }}
        >
          <CurrenMovieScheduleContext.Provider
            value={{
              currenMovieSchedule: currenMovieSchedule,
              setCurrenMovieSchedule: setCurrenMovieSchedule,
            }}
          >
            <main>
              <Nav />
              <Outlet />
            </main>
          </CurrenMovieScheduleContext.Provider>
        </CinemaDataContext.Provider>
      </MoviesListContext.Provider>
    </UserContext.Provider>
  );
}
