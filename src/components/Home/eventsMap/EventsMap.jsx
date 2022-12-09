import React, { useContext } from "react";
import { roomsList } from "../../../data";
import { FilterParamsContext } from "../Home";
import EventElement from "./EventElement";

export default function EventsMap() {
  const filterParams = useContext(FilterParamsContext);

  const elements = roomsList.map((room) => {
    // if it doesnt match the the wilaya then return nothing
    if (
      filterParams.cinema.label.toLowerCase() != "all" &&
      filterParams.cinema.label != room.title
    )
      return;
    if (
      filterParams.wilaya.value != "all" &&
      filterParams.wilaya.value != room.wilaya
    )
      return;

    // if it has subrooms
    if (room.subRooms) {
      const subroomMovies = room.subRooms.map((subroom, subRoomIndex) => {
        const movies = subroom.movies.map((movie, movieIndex) => {
          return (
            <EventElement
              key={movie.title}
              movie={movie}
              roomId={room.id}
              subRoomId={subRoomIndex}
              movieId={movieIndex}
            />
          );
        });
        return [...movies];
      });
      return [...subroomMovies];
    }

    // if its not a subroom
    const roomMovies = room.movies.map((movie, index) => {
      return (
        <EventElement
          key={movie.title}
          movie={movie}
          roomId={room.id}
          movieId={index}
        />
      );
    });
    return [...roomMovies];
  });

  return <div className="events-map">{elements}</div>;
}
