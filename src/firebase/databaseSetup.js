import { doc, GeoPoint, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { roomsList } from "../data";

/**creates a doc that contains an array of objects
 * that contain a cinemaName and id and wilaya and geolocation
 */
export async function CreateCinemaDocs() {
  const generalLocation = new GeoPoint(36.7753606, 3.0601882);
  const cinemasList = roomsList.map((room) => {
    return {
      id: room.id,
      name: room.title,
      location: generalLocation,
    };
  });

  const docData = {
    list: cinemasList,
  };
  await setDoc(doc(db, "cinemas", "cinemasList"), docData);
}

/**creates a doc that contains an array of objects
 * that contain a movie title and its id
 */
export async function CreateMovieDoc() {
  const moviesList = [];

  for (let roomIndex = 0; roomIndex < roomsList.length; roomIndex++) {
    const room = roomsList[roomIndex];
    let movieItem = {};
    let skipThisItem = false;

    // if it has subrooms
    if (room.subRooms != undefined) {
      // for each subroom
      for (
        let subRoomIndex = 0;
        subRoomIndex < room.subRooms.length;
        subRoomIndex++
      ) {
        const subRoom = room.subRooms[subRoomIndex];
        // for each movie in the subroom
        for (
          let subRoomMovieIndex = 0;
          subRoomMovieIndex < subRoom.movies.length;
          subRoomMovieIndex++
        ) {
          const movie = subRoom.movies[subRoomMovieIndex];
          movieItem = {
            id: extractId(movie.poster),
            title: movie.title,
          };
          skipThisItem = checkIfContains(moviesList, movieItem, skipThisItem);
          if (!skipThisItem) moviesList.push(movieItem);
        }
      }
    }
    // if it doesnt have any subrooms
    else {
      for (let movieIndex = 0; movieIndex < room.movies.length; movieIndex++) {
        const movie = room.movies[movieIndex];
        movieItem = {
          id: extractId(movie.poster),
          title: movie.title,
        };
        skipThisItem = checkIfContains(moviesList, movieItem, skipThisItem);
        if (!skipThisItem) moviesList.push(movieItem);
      }
    }
  }

  const docData = {
    list: moviesList,
  };

  // await setDoc(doc(db, "movies", "moviesList"), docData);
  return moviesList;
}

export async function createMoviesSchedule() {
  const movieList = CreateMovieDoc();
}

/**checks if the array already contains the movie title and return
 * a boolean that tells us if we should skip adding it to the list
 * or not if its already there
 */
function checkIfContains(moviesList, movieItem, skipThisItem) {
  for (let movieIndex = 0; movieIndex < moviesList.length; movieIndex++) {
    if (moviesList[movieIndex].title == movieItem.title) skipThisItem = true;
  }
  return skipThisItem;
}

/**gets the id from the /id.jpg string and returns
 * only the id
 */
function extractId(posterLink) {
  const match = posterLink.match(/(\w+)/);
  return match[0];
}
