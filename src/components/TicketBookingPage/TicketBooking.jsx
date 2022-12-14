import React, { useState } from "react";
import RegisterPage from "../Register/RegisterPage";
import SeatPicker from "../SeatPicker/SeatPicker";

export default function TicketBooking() {
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
        <SeatPicker
          gridInfo={gridInfo}
          unavailableSeats={unavailableSeats}
          bookedSeats={bookedSeats}
          GoToBuyPage={GoToBuyPage}
          setBookedSeats={setBookedSeats}
        />
      ) : (
        <RegisterPage bookedSeats={bookedSeats} />
      )}
    </>
  );
}
