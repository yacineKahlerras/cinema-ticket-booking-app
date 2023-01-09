import React from "react";

export default function TicketNumberInfo(props) {
  const { bookedSeats } = props;
  const count = bookedSeats.length;
  let textInfo =
    count < 1
      ? "pas encore de sièges sélectionnés"
      : count == 1
      ? "1 x siège sélectionnés"
      : `${count} x sièges sélectionnés`;

  return (
    <div className="ticket-number-info-container">
      <span className="ticket-number-info">{textInfo}</span>
    </div>
  );
}
