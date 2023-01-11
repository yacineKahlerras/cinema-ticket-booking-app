import React, { useContext } from "react";
import { MoviesListContext } from "@/App";
import EventElement from "@/components/eventsMap/EventElement";

export default function RoomEventsMap() {
  const movieList = useContext(MoviesListContext);

  const movieElements = movieList.list.map((movie, index) => {
    return <EventElement key={index} movie={movie} />;
  });

  return <div className="events-map">{movieElements}</div>;
}
