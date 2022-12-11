import React, { useState } from "react";
import RegisterPage from "../Register/RegisterPage";
import { gridInfoGenerator, seatElements } from "./SeatPickerMethods";

export default function SeatPicker() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [goBuyPage, setGoBuyPage] = useState(false);
  const gridInfo = {
    columns: 8,
    rows: 8,
  };
  const unavailableSeats = [
    { row: 0, col: 0 },
    { row: 2, col: 3 },
  ];

  function GoToBuyPage() {
    if (bookedSeats.length < 1) return;
    setGoBuyPage(true);
  }

  return (
    <>
      {!goBuyPage ? (
        <div className="seat-map-container">
          <h1>screen</h1>
          {seatElements(
            gridInfoGenerator(gridInfo, unavailableSeats, bookedSeats),
            setBookedSeats
          )}
          {bookedSeats.length > 0 ? (
            <h2>You selected {bookedSeats.length} tickets</h2>
          ) : (
            ""
          )}
          <button onClick={GoToBuyPage}>Buy Ticket</button>
        </div>
      ) : (
        <RegisterPage bookedSeats={bookedSeats} />
      )}
    </>
  );
}
