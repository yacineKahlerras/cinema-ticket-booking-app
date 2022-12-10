import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";

export default function EventPage() {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const subRoomId = searchParams.get("subRoomId");
  const movieId = searchParams.get("movieId");

  const room = roomsList.filter((room) => room.id == roomId)[0];
  const hasSubRoom = subRoomId !== null;
  const movie = hasSubRoom
    ? room.subRooms[subRoomId].movies[movieId]
    : room.movies[parseInt(movieId)];
  const { poster, title, date, time, price, langue } = movie;

  const posterImgSrc = `${posterLink}${poster}`;

  return (
    <div className="event-page-container">
      <div className="poster-container">
        <img src={posterImgSrc} alt="" />
      </div>
      <div className="text-side-container">
        <h1>{title}</h1>
        <p>
          {date} a {time}
        </p>
        <p>Language : {langue}</p>
        <p>price : {price}$</p>
        <button>Book Ticket</button>
      </div>
    </div>
  );
}
