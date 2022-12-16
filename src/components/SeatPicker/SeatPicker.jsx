import React from "react";
import SeatInfoBar from "./SeatInfoBar";
import { gridInfoGenerator, seatElements } from "./SeatPickerMethods";
import TicketNumberInfo from "./TicketNumberInfo";

export default function SeatPicker(props) {
  const {
    gridInfo,
    unavailableSeats,
    bookedSeats,
    goNextPage,
    setBookedSeats,
  } = props;

  return (
    <div className="seat-map-container">
      <div className="screen-container">
        <h1>ecran</h1>
      </div>

      {seatElements(
        gridInfoGenerator(gridInfo, unavailableSeats, bookedSeats),
        setBookedSeats
      )}

      <SeatInfoBar />
      <TicketNumberInfo bookedSeats={bookedSeats} />

      <button className="continue-btn" onClick={goNextPage}>
        Continuer
      </button>
    </div>
  );
}
