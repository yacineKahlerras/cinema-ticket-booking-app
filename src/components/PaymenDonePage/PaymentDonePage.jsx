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
  const downloadBtn = useRef();

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
    downloadBtn.current.textContent = "Patientez..";
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

    downloadBtn.current.textContent = "Telecharger";
  }

  return (
    <div className="payment-completed-container">
      <div className="ticket-purchassing-information">
        <h1>Merci d'avoir fait vos achats chez nous</h1>
        <p>
          vous pouvez télécharger les billets ici :{" "}
          <button
            className="download-btn"
            ref={downloadBtn}
            onClick={HandleDownloadTickets}
          >
            Telecharger
          </button>
        </p>
      </div>

      {Tickets()}
    </div>
  );
}
