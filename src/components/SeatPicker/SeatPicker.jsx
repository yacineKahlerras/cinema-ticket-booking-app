import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterPage from "../Register/RegisterPage";
import SeatInfoBar from "./SeatInfoBar";
import { gridInfoGenerator, seatElements } from "./SeatPickerMethods";
import TicketNumberInfo from "./TicketNumberInfo";

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
          <TicketNumberInfo bookedSeats={bookedSeats} />

          <button className="continue-btn" onClick={GoToBuyPage}>
            Continue
          </button>
          <Link to={`/Register`} state={bookedSeats}>
            Continue
          </Link>
        </div>
      ) : (
        <RegisterPage bookedSeats={bookedSeats} />
      )}
    </>
  );
}
