import React from "react";
import { useLoaderData } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import LeafeletMap from "../Events/LeafeletMap";
import RoomEventsMap from "./RoomEventsMap";

export function RoomLoader({ params }) {
  return params.roomId;
}

export default function Room() {
  const roomId = useLoaderData();
  const room = roomsList.filter((r) => r.id === roomId)[0];
  const { title: roomName, wilaya } = room;

  const filterParams = {
    wilaya: wilaya,
    cinema: roomName,
  };

  return (
    <div className="room-container">
      <header>
        <h1>cinema {roomName}</h1>
        <LeafeletMap />
      </header>

      <h2>Movies : </h2>
      <RoomEventsMap filterParams={filterParams} />
    </div>
  );
}
