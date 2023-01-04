import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import Ticket from "./Ticket";
import html2canvas from "html2canvas";
import { CinemaDataContext, MoviesListContext } from "../../App";
import GetListItemById from "./GetListItemById";

export default function PaymentDonePage() {
  const location = useLocation();
  const { movieInfo, bookedSeats } = location.state;

  const ticketRef = useRef();
  const downloadBtn = useRef();

  const movieList = useContext(MoviesListContext).list;
  const cinemaList = useContext(CinemaDataContext).cinemasListData.list;
  const movie = GetListItemById(movieInfo.movieId, movieList);
  const cinema = GetListItemById(movieInfo.cinemaId, cinemaList);

  function Tickets() {
    return (
      <div
        ref={ticketRef}
        style={{ display: "none" }}
        className="tickets-group-container"
      >
        {bookedSeats.map((_, index) => {
          return (
            <Ticket
              key={index}
              location={location}
              title={movie.title}
              date={"date"}
              roomTitle={cinema.name}
              eventTime={"eventTime"}
              bookedSeats={bookedSeats}
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

const moList = {
  list: [
    {
      id: "893369",
      title: "jack mimoun",
      price: 800,
    },
    {
      id: "676547",
      title: "la proie diable",
      price: 800,
    },
    {
      id: "899112",
      title: "violent night",
      price: 800,
    },
    {
      id: "505642",
      title: "black panther 2",
      price: 800,
    },
    {
      id: "800939",
      title: "ticket to paradise",
      price: 800,
    },
    {
      id: "366672",
      title: "samourai academy",
      price: 800,
    },
    {
      id: "882598",
      title: "smile",
      price: 800,
    },
  ],
};

const ciList = {
  cinemasListData: {
    list: [
      {
        location: {
          latitude: 36.7753606,
          longitude: 3.0601882,
        },
        id: "h2Qgg",
        name: "ahmed bay",
        wilaya: "constantine",
      },
      {
        id: "ri-rG",
        location: {
          latitude: 36.7753606,
          longitude: 3.0601882,
        },
        wilaya: "alger",
        name: "ibn zeydoun",
      },
      {
        name: "cosmos",
        location: {
          latitude: 36.7753606,
          longitude: 3.0601882,
        },
        wilaya: "constantine",
        id: "Rvmff",
      },
      {
        wilaya: "alger",
        location: {
          latitude: 36.7753606,
          longitude: 3.0601882,
        },
        id: "NKy7N",
        name: "ibn khaldoun",
      },
      {
        wilaya: "alger",
        id: "Tldge",
        name: "es sahel",
        location: {
          latitude: 36.7753606,
          longitude: 3.0601882,
        },
      },
      {
        id: "n4pdv",
        location: {
          latitude: 36.7753606,
          longitude: 3.0601882,
        },
        wilaya: "oran",
        name: "cinegold",
      },
    ],
  },
};

const moIn = {
  movieId: "893369",
  cinemaId: "h2Qgg",
  dateInfo: {
    language: "vostfr",
    takenSeats: [
      {
        row: 3,
        col: 5,
      },
      {
        col: 7,
        row: 0,
      },
      {
        col: 7,
        row: 0,
      },
      {
        col: 1,
        row: 7,
      },
      {
        row: 7,
        col: 4,
      },
    ],
    date: {
      seconds: 1672884000,
      nanoseconds: 0,
    },
  },
};
