import React from "react";
import { roomsList } from "../../data";
import geoLogo from "../../assets/geo-alt-fill.svg";
import { Link } from "react-router-dom";

export default function Rooms() {
  const roomElements = roomsList.map((room, index) => {
    return (
      <Link
        to={`/Room/${room.id}`}
        key={index}
        className="individiual-room-container"
      >
        {/* room location */}
        <div className="room-location-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <p className="wilaya-info">{room.wilaya}</p>
        </div>

        {/* text info */}
        <div className="room-text-info-container">
          <h2>cinema {room.title}</h2>
        </div>
      </Link>
    );
  });

  return (
    <div className="rooms-container">
      <h1>Nos Endroits : </h1>

      <div className="rooms-map">{roomElements}</div>
    </div>
  );
}

/**
 * we get list of rooms that we have if we dont have a room id
 * when i click on one of the rooms it gets me to thesame page but with a room id
 * i go to a link containing cinema info and the list of movies that it has
 * each movie is a link to an event page with search params
 */
