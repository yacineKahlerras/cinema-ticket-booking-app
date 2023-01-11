import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import LeafeletMap from "../EventPage/LeafeletMap";
import RoomEventsMap from "./RoomEventsMap";
import "./style/_index.scss";

export function RoomLoader({ params }) {
  return params.roomId;
}

export const RoomIdContext = createContext();

export default function Room() {
  const roomId = useLoaderData();
  const room = roomsList.filter((r) => r.id === roomId)[0];
  const { title: roomName, wilaya } = room;

  return (
    <RoomIdContext.Provider value={roomId}>
      <div className="room-container">
        <header>
          <h1>
            cinema {roomName} ({wilaya})
          </h1>
        </header>

        <h2>Films </h2>
        <RoomEventsMap />

        <h2>Endroit</h2>
        <LeafeletMap />
      </div>
    </RoomIdContext.Provider>
  );
}
