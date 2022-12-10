import React from "react";

export default function Seat(props) {
  const {
    seatInfo: { booked, available },
    gridPosition: { rowIndex, columnIndex },
  } = props;

  function bookSeat() {}

  return (
    <button
      style={{ color: !available ? "red" : booked ? "green" : "inherit" }}
      onClick={bookSeat}
    >
      seat
    </button>
  );
}
