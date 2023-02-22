import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

/**gets list of movies from the database collection movies */
export async function getMoviesList(setMoviesList) {
  const moviesDocRef = doc(db, "movies", "moviesList");
  const moviesDocSnapshot = await getDoc(moviesDocRef);

  if (moviesDocSnapshot.exists()) {
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
    setCurrenMovieSchedule(movieScheduleSnapshot.data());
  } else {
    console.log(`no document by the name of ${movieId}`);
  }
}

/**gets the ciname array listfrom the cinemas collection */
export async function getCinemasList(setCinemasListData) {
  const cinemasDocRef = doc(db, "cinemas", "cinemasList");
  const cinemasListSnapshot = await getDoc(cinemasDocRef);

  if (cinemasListSnapshot.exists()) {
    setCinemasListData(cinemasListSnapshot.data());
  } else {
    console.log(`no document by that name.`);
  }
}

/**gets the boughts tickets from database
 * using the doc with the name of user.uid
 */
export async function GetUserTickets(userId, setUserTicketsList) {
  const userDocRef = doc(db, "userTickets", userId);
  const userTicketsSnapshot = await getDoc(userDocRef);

  if (userTicketsSnapshot) {
    setUserTicketsList(userTicketsSnapshot.data());
  } else {
    console.log(`error while fetching doc with name ${userId}.`);
  }
}
