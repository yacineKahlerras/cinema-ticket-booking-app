import React from "react";

export default function Seat(props) {
  const {
    seatInfo: { booked, available },
    gridPosition: { rowIndex, columnIndex },
    setBookedSeats,
  } = props;

  function bookSeat() {
    if (!available) return;
    setBookedSeats((prevBookedSeats) => {
      for (let i = 0; i < prevBookedSeats.length; i++) {
        if (
          prevBookedSeats[i].row == rowIndex &&
          prevBookedSeats[i].col == columnIndex
        ) {
          prevBookedSeats.splice(i, 1);
          return [...prevBookedSeats];
        }
      }
      prevBookedSeats.push({ row: rowIndex, col: columnIndex });
      return [...prevBookedSeats];
    });
  }

  return (
    <button
      style={{ color: !available ? "red" : booked ? "blue" : "inherit" }}
      onClick={bookSeat}
    >
      seat
    </button>
  );
}
