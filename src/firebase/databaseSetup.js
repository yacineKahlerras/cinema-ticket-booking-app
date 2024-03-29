import { doc, GeoPoint, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase-config";
import { moviesListObject, roomsList } from "../data";

const gridInfo = {
  columns: 10,
  rows: 8,
};

/**creates a doc that contains an array of objects
 * that contain a cinemaName and id and wilaya and geolocation
 */
export async function CreateCinemaDocs() {
  const generalLocation = new GeoPoint(36.7753606, 3.0601882);
  const cinemasList = roomsList.map((room) => {
    return {
      id: room.id,
      name: room.title,
      wilaya: room.wilaya,
      location: generalLocation,
    };
  });

  const docData = {
    list: cinemasList,
  };
  // await setDoc(doc(db, "cinemas", "cinemasList"), docData);
  console.log(docData);
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
            price: 800,
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
          price: 800,
        };
        skipThisItem = checkIfContains(moviesList, movieItem, skipThisItem);
        if (!skipThisItem) moviesList.push(movieItem);
      }
    }
  }

  const docData = {
    list: moviesList,
  };

  // await setDoc(doc(db, "movies", "moviesList"), moviesListObject);
  return moviesList;
}

/**creates a schedule for each movie */
export async function createMoviesSchedule() {
  const movieList = moviesListObject.list;
  const cinemasIdList = cinemasIds();
  const languages = ["eng", "vostfr", "fr"];

  for (let movieIdx = 0; movieIdx < movieList.length; movieIdx++) {
    const movieId = movieList[movieIdx].id;
    const movieTitle = movieList[movieIdx].title;
    const movieSchedule = [];
    for (let cinemaIdx = 0; cinemaIdx < cinemasIdList.length; cinemaIdx++) {
      const id = cinemasIdList[cinemaIdx];
      const dates = [];

      // for each language set a date and takeSeats map
      for (let languageIdx = 0; languageIdx < languages.length; languageIdx++) {
        const day = Math.floor(Math.random() * 13 + 1);
        const hour = Math.floor(Math.random() * 22 + 8);
        const newDate = new Date(2023, 0, day, hour);
        const date = Timestamp.fromDate(newDate);
        const language = languages[languageIdx];
        const takenSeats = [];

        // for each seat pick a random col and row
        for (let seatIdx = 0; seatIdx < 5; seatIdx++) {
          const col = Math.floor(Math.random() * gridInfo.columns);
          const row = Math.floor(Math.random() * gridInfo.rows);
          takenSeats.push({ col: col, row: row });
        }
        dates.push({ date: date, language: language, takenSeats: takenSeats });
      }
      movieSchedule.push({ cinemaId: id, dates: dates });
    }

    // setting the document movie data
    const docData = { title: movieTitle, schedule: movieSchedule };
    // await setDoc(doc(db, "movies/moviesList/moviesSchedule", movieId), docData);
    console.log(docData);
  }
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

/**returns array of cineam ids from roomsList */
function cinemasIds() {
  return roomsList.map((r) => {
    return r.id;
  });
}

/**gets the movie and seats info and adds them to the database
 * as a user document that has a user id
 */
export async function SaveUserTickets(
  user,
  bookedSeats,
  dateParts,
  movie,
  cinemaName
) {
  const movieTicketsInfoList = [];
  const movieId = movie.id;

  for (let seatIdx = 0; seatIdx < bookedSeats.length; seatIdx++) {
    const seat = bookedSeats[seatIdx];

    movieTicketsInfoList.push({
      dateParts: dateParts,
      movieInfo: movie,
      cinemaName: cinemaName,
      seat: seat,
    });
  }

  const docData = {
    [movieId]: movieTicketsInfoList,
  };

  await setDoc(doc(db, "userTickets", user.uid), docData, { merge: true });
}
