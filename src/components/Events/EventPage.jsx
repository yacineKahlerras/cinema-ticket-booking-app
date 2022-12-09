import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";

export default function EventPage() {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const subRoomId = searchParams.get("subRoomId");
  const movieId = searchParams.get("movieId");
  const room = roomsList.filter((room) => room.id == roomId)[0];
  console.log(subRoomId);

  return (
    <div className="event-page-container">
      <div className="poster-container"></div>
    </div>
  );
}
