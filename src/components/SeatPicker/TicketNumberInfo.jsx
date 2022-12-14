import React from "react";

export default function TicketNumberInfo(props) {
  const { bookedSeats } = props;
  const count = bookedSeats.length;
  let textInfo =
    count < 1
      ? "no seats selected yet"
      : count == 1
      ? "1 x seat selected"
      : `${count} x seats selected`;

  return (
    <div className="ticket-number-info-container">
      <span className="ticket-number-info">{textInfo}</span>
    </div>
  );
}
