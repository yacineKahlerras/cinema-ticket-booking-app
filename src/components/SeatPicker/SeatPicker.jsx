import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";

export default function SeatPicker() {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const subRoomId = searchParams.get("subRoomId");
  const movieId = searchParams.get("movieId");

  return <></>;
}
