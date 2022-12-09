import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";

export default function EventPage() {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const movieId = searchParams.get("movieId");
  const room = roomsList.filter((room) => room.id == movieId);
  console.log(room);

  return (
    <div className="event-page-container">
      <div className="poster-container"></div>
    </div>
  );
}
