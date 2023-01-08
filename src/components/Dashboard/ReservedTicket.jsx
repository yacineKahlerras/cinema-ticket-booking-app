import React, { useRef } from "react";
import posterImg from "../../assets/posters/dd5yGBLbqB507gHJSosNY0IYHRQ.jpg";
import Ticket from "../PaymenDonePage/Ticket";
import html2canvas from "html2canvas";

export default function ReservedTickets(props) {
  const { movieData } = props;
  const { cinemaName, dateParts, movieInfo } = movieData[0];
  const { title, price } = movieInfo;
  const { day, month, dayOfWeek, hour, year } = dateParts;
  const numberOfTickets = movieData.length;
  const totalPrice = price * numberOfTickets;

  const ticketRef = useRef();
  const downloadBtn = useRef();

  function TicketsGroup() {
    const ticketElements = [];

    for (let ticketIdx = 0; ticketIdx < movieData.length; ticketIdx++) {
      ticketElements.push(
        <Ticket
          key={ticketIdx}
          dateParts={dateParts}
          title={title}
          roomTitle={cinemaName}
          seat={movieData[ticketIdx].seat}
        />
      );
    }

    return (
      <div
        ref={ticketRef}
        style={{ display: "none" }}
        className="tickets-group-container"
      >
        {ticketElements}
      </div>
    );
  }

  async function HandleDownloadTickets() {
    ticketRef.current.style.display = "flex";
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
    ticketRef.current.style.display = "none";
  }

  return (
    <>
      <div className="reserved-ticket">
        <div className="reserved-ticket-center">
          <div className="poster-container">
            <img src={posterImg} alt="ticket movie title" />
          </div>
          <div className="reserved-ticket-text-info">
            <h2 className="ticket-title">{title}</h2>
            <h3 className="ticket-cinema">Cinema {cinemaName}</h3>
            <p className="ticket-date">
              le {day} {month} à {hour}h
            </p>
            <p className="ticket-count">{movieData.length} x tickets</p>
            <p className="ticket-price">{totalPrice}Da</p>
          </div>
          <button
            ref={downloadBtn}
            onClick={HandleDownloadTickets}
            className="download-btn"
          >
            Telecharger
          </button>
        </div>

        <div className="payment-completed-container">{TicketsGroup()}</div>
      </div>
    </>
  );
}
