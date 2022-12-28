import { doc, GeoPoint, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { roomsList } from "../data";

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

export async function CreateMovieDoc() {
  const moviesList = [];

  for (let roomIndex = 0; roomIndex < roomsList.length; roomIndex++) {
    const room = roomsList[roomIndex];
    let movieItem = {};
    let skipThisItem = false;

    if (room.subRooms != undefined) {
      for (
        let subRoomIndex = 0;
        subRoomIndex < room.subRooms.length;
        subRoomIndex++
      ) {
        const subRoom = room.subRooms[subRoomIndex];
        for (
          let subRoomMovieIndex = 0;
          subRoomMovieIndex < subRoom.movies.length;
          subRoomMovieIndex++
        ) {
          const movie = subRoom.movies[subRoomMovieIndex];
          movieItem = {
            id: movie.poster,
            title: movie.title,
          };
          for (
            let movieIndex = 0;
            movieIndex < moviesList.length;
            movieIndex++
          ) {
            if (moviesList[movieIndex].title == movieItem.title)
              skipThisItem = true;
          }
          if (!skipThisItem) moviesList.push(movieItem);
        }
      }
    } else {
      for (let movieIndex = 0; movieIndex < room.movies.length; movieIndex++) {
        const movie = room.movies[movieIndex];
        movieItem = {
          id: movie.poster,
          title: movie.title,
        };
        for (let movieIndex = 0; movieIndex < moviesList.length; movieIndex++) {
          if (moviesList[movieIndex].title == movieItem.title)
            skipThisItem = true;
        }
        if (!skipThisItem) moviesList.push(movieItem);
      }
    }
  }

  const docData = {
    list: moviesList,
  };

  //   await setDoc(doc(db, "movies", "moviesList"), docData);
  console.log(moviesList);
}
