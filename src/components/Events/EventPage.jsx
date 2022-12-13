import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import {
  DateDecontructor,
  LanguageDecontructor,
} from "../Home/eventsMap/EventMothods";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import LeafeletMap from "./LeafeletMap";

export default function EventPage() {
  // link search params
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const subRoomId = searchParams.get("subRoomId");
  const movieId = searchParams.get("movieId");

  // room and movie infos
  const room = roomsList.filter((room) => room.id == roomId)[0];
  const hasSubRoom = subRoomId !== null;
  const movie = hasSubRoom
    ? room.subRooms[subRoomId].movies[movieId]
    : room.movies[parseInt(movieId)];
  const { poster, title, date, time, price, langue } = movie;

  // movie info data handeling
  const posterImgSrc = `${posterLink}${poster}`;
  const seatPickerSearchParams = `/SeatPicker/?roomId=${roomId}${
    hasSubRoom ? `subRoomId=${subRoomId}` : ""
  }&movieId=${movieId}`;
  const decontructedDate = DateDecontructor(date);
  const deconstructedLanguage = LanguageDecontructor(langue);

  return (
    <div className="event-page-container">
      {/* poster */}
      <div className="poster-container">
        <img src={posterImgSrc} alt="poster" />
      </div>

      {/* movie info */}
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

        {/* book ticket button */}
        <Link className="book-ticket-btn" to={seatPickerSearchParams}>
          book ticket
        </Link>
      </div>

      {/* movie synopsis */}
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

      {/* cinema location map */}
      <div className="synopsis room-location-container">
        <h2>Location</h2>
        <LeafeletMap />
      </div>
    </div>
  );
}
