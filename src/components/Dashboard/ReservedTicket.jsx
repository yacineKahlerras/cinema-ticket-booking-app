import React from "react";
import posterImg from "../../assets/posters/dd5yGBLbqB507gHJSosNY0IYHRQ.jpg";

export default function ReservedTicket() {
  return (
    <div className="reserved-ticket">
      <div className="reserved-ticket-center">
        <div className="poster-container">
          <img src={posterImg} alt="ticket movie title" />
        </div>
        <div className="reserved-ticket-text-info">
          <h2 className="ticket-title">Gardians of The Galaxy Vol.2</h2>
          <h3 className="ticket-cinema">Cinema Ahmed Bey</h3>
          <p className="ticket-date">le 14-12 à 12h</p>
          <p className="ticket-count">3 x tickets</p>
          <p className="ticket-price">2400Da</p>
        </div>
        <button className="download-btn">Telecharger</button>
      </div>
    </div>
  );
}
