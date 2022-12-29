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
