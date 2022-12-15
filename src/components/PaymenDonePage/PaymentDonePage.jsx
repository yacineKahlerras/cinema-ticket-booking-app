import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useLocation } from "react-router-dom";
import { DateDecontructor } from "../Home/eventsMap/EventMothods";
import Ticket from "./Ticket";

export default function PaymentDonePage(props) {
  const location = useLocation();
  const { title, date, roomTitle, eventTime, bookedSeats } = location.state;
  const tempDate = DateDecontructor(date);

  return (
    <div className="payment-completed-container">
      <div className="ticket-purchassing-information">
        <h1>
          Thanks for Purchassing the ticket{bookedSeats.length > 1 ? "s" : ""}
        </h1>
        <p></p>
      </div>

      <Ticket
        location={location}
        title={title}
        date={date}
        roomTitle={roomTitle}
        eventTime={eventTime}
        bookedSeats={bookedSeats}
      />
    </div>
  );
}
