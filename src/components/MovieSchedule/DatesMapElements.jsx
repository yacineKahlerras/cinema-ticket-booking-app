import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieIsContext } from "./MovieSchedule";

export default function DatesMapElements(props) {
  const { cinemaSchedule } = props;
  const movieId = useContext(MovieIsContext);

  return cinemaSchedule.dates.map((dateInfo, index) => {
    const dateObject = new Date(dateInfo.date.seconds * 1000);

    const month = dateObject.toDateString().match(/(\w+)/g)[1];
    const day = dateObject.toDateString().match(/(\w+)/g)[2];
    const hour = dateObject.getHours();
    const language = dateInfo.language;

    return (
      <Link
        key={index}
        to={`/TicketBooking?movieId=${movieId}&cinemaId=${cinemaSchedule.cinemaId}&language=${language}`}
        state={{
          movieId: movieId,
          cinemaId: cinemaSchedule.cinemaId,
          dateInfo: dateInfo,
        }}
      >
        <div className="date-container">
          <span className="date">
            {day} {month}
          </span>
          <span className="hour">à {hour}h</span>
          <span className="language">{language}</span>
        </div>
      </Link>
    );
  });
}
