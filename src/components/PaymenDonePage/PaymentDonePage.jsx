import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Ticket from "./Ticket";
import html2canvas from "html2canvas";
import { CinemaDataContext, MoviesListContext, UserContext } from "../../App";
import GetListItemById from "./GetListItemById";
import GetDateParts from "./GetDateParts";
import { SaveUserTickets } from "../../firebase/databaseSetup";

export default function PaymentDonePage() {
  const location = useLocation();
  const { movieInfo, bookedSeats } = location.state;
  const { user } = useContext(UserContext);

  const ticketRef = useRef();
  const downloadBtn = useRef();

  const movieList = useContext(MoviesListContext).list;
  const cinemaList = useContext(CinemaDataContext).cinemasListData.list;
  const movie = GetListItemById(movieInfo.movieId, movieList);
  const cinema = GetListItemById(movieInfo.cinemaId, cinemaList);
  const dateObject = new Date(movieInfo.dateInfo.date.seconds * 1000);
  const dateParts = GetDateParts(dateObject);

  useEffect(() => {
    SaveUserTickets(user, bookedSeats, dateParts, movie, cinema.name);
  }, []);

  function Tickets() {
    return (
      <div
        ref={ticketRef}
        style={{ display: "none" }}
        className="tickets-group-container"
      >
        {bookedSeats.map((seat, index) => {
          return (
            <Ticket
              key={index}
              dateParts={dateParts}
              title={movie.title}
              roomTitle={cinema.name}
              seat={seat}
            />
          );
        })}
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
    <div className="payment-completed-container">
      <div className="ticket-purchassing-information">
        <h1>Merci d'avoir fait vos achats chez nous</h1>
        <p>vous pouvez télécharger les billets ici : </p>
        <button
          className="download-btn"
          ref={downloadBtn}
          onClick={HandleDownloadTickets}
        >
          Telecharger
        </button>
      </div>

      {Tickets()}
    </div>
  );
}
