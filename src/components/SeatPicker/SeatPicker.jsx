import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { gridInfoGenerator, seatElements } from "./SeatPickerMethods";
import Seat from "./Seat";

export default function SeatPicker() {
  const gridInfo = {
    columns: 4,
    rows: 4,
  };
  const bookedSeats = [
    { row: 0, col: 0 },
    { row: 2, col: 3 },
  ];
  console.log(gridInfoGenerator(gridInfo, bookedSeats));

  return (
    <div className="seat-map-container">
      {seatElements(gridInfoGenerator(gridInfo, bookedSeats))}
    </div>
  );
}
