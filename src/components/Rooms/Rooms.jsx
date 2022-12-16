import React from "react";
import { roomsList } from "../../data";

export default function Rooms() {
  const roomElements = roomsList.map((room) => {
    return (
      <div className="individiual-room-container">
        <div className="room-poster-container"></div>
        <div className="room-text-info-container">
          <h1>{room.title}</h1>
        </div>
      </div>
    );
  });

  return (
    <div className="rooms-container">
      <h1>Rooms List : </h1>

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
