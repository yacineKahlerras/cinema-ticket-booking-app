import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

/**gets list of movies from the database collection movies */
export async function getMoviesList(setMoviesList) {
  const moviesDocRef = doc(db, "movies", "moviesList");
  const moviesDocSnapshot = await getDoc(moviesDocRef);

  if (moviesDocSnapshot.exists()) {
    console.log("sucess : ", moviesDocSnapshot.data());
    setMoviesList(moviesDocSnapshot.data());
  } else {
    console.log("no document by the name of movies list");
  }
}

/**gets movie schedule doc from the subcollection */
export async function getMovieSchedule(movieId, setCurrenMovieSchedule) {
  const collectionPath = "movies/moviesList/moviesSchedule";
  const movieScheduleDocRef = doc(db, collectionPath, movieId);
  const movieScheduleSnapshot = await getDoc(movieScheduleDocRef);

  if (movieScheduleSnapshot.exists()) {
    console.log(movieScheduleSnapshot.data());
    setCurrenMovieSchedule(movieScheduleSnapshot.data());
  } else {
    console.log(`no document by the name of ${movieId}`);
  }
}

/**gets the ciname array listfrom the cinemas collection */
export async function getCinemasList() {
  const cinemasDocRef = doc(db, "cinemas", "cinemasList");
  const cinemasListSnapshot = await getDoc(cinemasDocRef);

  if (cinemasListSnapshot.exists()) {
    console.log(cinemasListSnapshot.data());
    return cinemasListSnapshot.data();
  } else {
    console.log(`no document by that name.`);
  }
}
