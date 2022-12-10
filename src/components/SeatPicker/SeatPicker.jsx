import React, { useState } from "react";
import { gridInfoGenerator, seatElements } from "./SeatPickerMethods";

export default function SeatPicker() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const gridInfo = {
    columns: 4,
    rows: 4,
  };
  const unavailableSeats = [
    { row: 0, col: 0 },
    { row: 2, col: 3 },
  ];

  return (
    <div className="seat-map-container">
      {seatElements(gridInfoGenerator(gridInfo, unavailableSeats, bookedSeats))}
    </div>
  );
}
