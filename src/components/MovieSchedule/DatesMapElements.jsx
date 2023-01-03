import React from "react";
import { Link } from "react-router-dom";

export default function DatesMapElements(props) {
  const { cinemaSchedule } = props;

  return cinemaSchedule.dates.map((dateInfo, index) => {
    const dateObject = new Date(dateInfo.date.seconds * 1000);

    const month = dateObject.toDateString().match(/(\w+)/g)[1];
    const day = dateObject.toDateString().match(/(\w+)/g)[2];
    const hour = dateObject.getHours();
    const language = dateInfo.language;

    return (
      <Link key={index} to={`/`}>
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
