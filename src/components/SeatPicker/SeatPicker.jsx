import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";

export default function SeatPicker() {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const subRoomId = searchParams.get("subRoomId");
  const movieId = searchParams.get("movieId");
  const [seats, setSeats] = useState();
  const gridInfo = {
    columns: 4,
    rows: 4,
  };
  const bookedSeats = [
    { col: 1, row: 1 },
    { col: 3, row: 3 },
  ];

  const rowInfoArray = new Array(gridInfo.columns);
  for (let i = 0; i < gridInfo.columns; i++) {
    rowInfoArray[i] = { booked: false };
  }
  const gridInfoArray = new Array(gridInfo.rows);
  for (let i = 0; i < gridInfo.rows; i++) {
    gridInfoArray[i] = JSON.parse(JSON.stringify(rowInfoArray));
  }
  gridInfoArray[0][0].booked = true;
  console.log(gridInfoArray);

  return <h1></h1>;
}

/**
 * create an object {col, row, booked}
 * make an array with the number of columns
 * add that same array to another with the number of columns
 * with a list of already booked seats change the 'booked' value
 * based on that list make row divs and add them with a number of columns on to objects
 */
