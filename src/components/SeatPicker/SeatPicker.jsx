import React, { useState } from "react";
import RegisterPage from "../Register/RegisterPage";
import SeatInfoBar from "./SeatInfoBar";
import { gridInfoGenerator, seatElements } from "./SeatPickerMethods";

export default function SeatPicker() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [goBuyPage, setGoBuyPage] = useState(false);
  const gridInfo = {
    columns: 10,
    rows: 8,
  };
  const unavailableSeats = [
    { row: 0, col: 0 },
    { row: 2, col: 3 },
    { row: 2, col: 4 },
    { row: 5, col: 0 },
    { row: 5, col: 6 },
  ];

  function GoToBuyPage() {
    if (bookedSeats.length < 1) return;
    setGoBuyPage(true);
  }

  return (
    <>
      {!goBuyPage ? (
        <div className="seat-map-container">
          <div className="screen-container">
            <h1>screen</h1>
          </div>

          {seatElements(
            gridInfoGenerator(gridInfo, unavailableSeats, bookedSeats),
            setBookedSeats
          )}

          <SeatInfoBar />

          {bookedSeats.length > 0 ? (
            <h2>You selected {bookedSeats.length} tickets</h2>
          ) : (
            ""
          )}
          <button className="continue-btn" onClick={GoToBuyPage}>
            Continue
          </button>
        </div>
      ) : (
        <RegisterPage bookedSeats={bookedSeats} />
      )}
    </>
  );
}
