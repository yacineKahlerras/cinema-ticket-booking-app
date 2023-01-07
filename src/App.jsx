import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/googleAuth";
import { moviesListObject } from "./data";
import { cinemasListObject } from "./data";

/**create a state that has the current movie schedule
 * create a context for that and pass it on to the child components
 * grab the context in ticket booking and display the info
 *
 * if the context data doesnt match with search params id then re-fetch
 * the movie schedule from the database
 */

export const UserContext = createContext();
export const MoviesListContext = createContext();
export const CinemaDataContext = createContext();
export const CurrenMovieScheduleContext = createContext();

export default function App() {
  const [user, setUser] = useState({});
  const [moviesList, setMoviesList] = useState(moviesListObject);
  const [cinemasListData, setCinemasListData] = useState(cinemasListObject);
  const [currenMovieSchedule, setCurrenMovieSchedule] = useState();

  // gets movies list from document database and updates the moviesList state
  useEffect(() => {
    // getMoviesList(setMoviesList);
  });

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

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
