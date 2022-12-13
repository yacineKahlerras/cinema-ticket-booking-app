import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import {
  DateDecontructor,
  LanguageDecontructor,
} from "../Home/eventsMap/EventMothods";

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
  const seatPickerSearchParams = `/SeatPicker/?roomId=${roomId}${
    hasSubRoom ? `subRoomId=${subRoomId}` : ""
  }&movieId=${movieId}`;
  const decontructedDate = DateDecontructor(date);
  const deconstructedLanguage = LanguageDecontructor(langue);

  return (
    <div className="event-page-container">
      <div className="poster-container">
        <img src={posterImgSrc} alt="poster" />
      </div>
      <div className="text-side-container">
        <h1>{title}</h1>
        <div className="info-element">
          <span className="info-element-label">Cinema : </span>
          <p className="info-element-value">{room.title}</p>
        </div>
        <div className="info-element">
          <span className="info-element-label">Date : </span>
          <p className="info-element-value">
            {decontructedDate.weekday} le {decontructedDate.day}-
            {decontructedDate.month} a {time}
          </p>
        </div>
        <div className="info-element">
          <span className="info-element-label">Language : </span>
          <p className="info-element-value">{deconstructedLanguage}</p>
        </div>
        <div className="info-element">
          <span className="info-element-label">Price : </span>
          <p className="info-element-value">{price}$</p>
        </div>

        <Link className="book-ticket-btn" to={seatPickerSearchParams}>
          book ticket
        </Link>
      </div>
      <div className="synopsis">
        <h2>Synopsis</h2>
        <p>
          Set more than a decade after the events of the first film, "Avatar The
          Way of Water" begins to tell the story of the Sully family (Jake,
          Neytiri and their kids), the trouble that follows them, the lengths
          they go to keep each other safe, the battles they fight to stay alive
          and the tragedies they endure.
        </p>
      </div>
    </div>
  );
}
