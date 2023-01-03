import React, { useEffect, useRef } from "react";
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
  const screenRef = useRef();

  useEffect(() => {
    screenRef.current.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  }, []);

  return (
    <div className="seat-map-container">
      <div className="screen-container">
        <h1 ref={screenRef}>ecran</h1>
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
