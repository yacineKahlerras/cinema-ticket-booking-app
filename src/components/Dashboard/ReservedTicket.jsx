import React from "react";
import posterImg from "../../assets/posters/dd5yGBLbqB507gHJSosNY0IYHRQ.jpg";

export default function ReservedTickets(props) {
  const { movieData } = props;
  const { cinemaName, dateParts, movieInfo } = movieData[0];
  const { title, price } = movieInfo;
  const { day, month, dayOfWeek, hour, year } = dateParts;
  const numberOfTickets = movieData.length;
  const totalPrice = price * numberOfTickets;

  return (
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
        <button className="download-btn">Telecharger</button>
      </div>
    </div>
  );
}
