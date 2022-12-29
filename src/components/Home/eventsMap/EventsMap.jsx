import React, { useContext } from "react";
import { MoviesListContext } from "../../../App";
import EventElement from "./EventElement";

export default function EventsMap() {
  const movieList = useContext(MoviesListContext);

  const movieElements = movieList.list.map((movie, index) => {
    return <EventElement key={index} id={movie.id} title={movie.title} />;
  });

  return <div className="events-map">{movieElements}</div>;
}
