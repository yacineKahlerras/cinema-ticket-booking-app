import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { DateDecontructor } from "../Home/eventsMap/EventMothods";
import Ticket from "./Ticket";
import html2canvas from "html2canvas";

export default function PaymentDonePage() {
  const location = useLocation();
  const { title, date, roomTitle, eventTime, bookedSeats } = location.state;
  const tempDate = DateDecontructor(date);
  const ticketRef = useRef();

  function Tickets() {
    return (
      <div ref={ticketRef} className="tickets-group-container">
        {bookedSeats.map((_, index) => {
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

  async function HandleDownloadTickets() {
    const element = ticketRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

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
