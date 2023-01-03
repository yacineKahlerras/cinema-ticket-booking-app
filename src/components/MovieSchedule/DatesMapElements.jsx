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
        to={`/TicketBooking?roomId=h2Qgg&movieId=0`}
        state={{ movieId: movieId, dateInfo: dateInfo }}
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
