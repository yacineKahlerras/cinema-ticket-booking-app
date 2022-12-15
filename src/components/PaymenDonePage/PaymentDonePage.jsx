import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { DateDecontructor } from "../Home/eventsMap/EventMothods";
import Ticket from "./Ticket";

export default function PaymentDonePage() {
  const location = useLocation();
  const { title, date, roomTitle, eventTime, bookedSeats } = location.state;
  const tempDate = DateDecontructor(date);
  const ticketRef = useRef();

  function Tickets() {
    return (
      <div ref={ticketRef} className="tickets-group-container">
        {bookedSeats.map((seat, index) => {
          return (
            <Ticket
              key={index}
              location={location}
              title={title}
              date={date}
              roomTitle={roomTitle}
              eventTime={eventTime}
              bookedSeats={bookedSeats}
            />
          );
        })}
      </div>
    );
  }

  function HandleDownloadTickets() {}

  return (
    <div className="payment-completed-container">
      <div className="ticket-purchassing-information">
        <h1>
          Thanks for Purchassing the ticket{bookedSeats.length > 1 ? "s" : ""}
        </h1>
        <p>
          you can download the tickets here :{" "}
          <button onClick={HandleDownloadTickets}>Download</button>
        </p>
      </div>

      {Tickets()}
    </div>
  );
}
