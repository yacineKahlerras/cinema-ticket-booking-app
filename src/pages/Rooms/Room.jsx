import React from "react";
import { useLoaderData } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import LeafeletMap from "../EventPage/LeafeletMap";
import RoomEventsMap from "./RoomEventsMap";
import "./style/_index.scss";

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

      <h2>Films </h2>
      <RoomEventsMap filterParams={filterParams} />
    </div>
  );
}
