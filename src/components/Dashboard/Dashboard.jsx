import React from "react";
import posterImg from "../../assets/posters/dd5yGBLbqB507gHJSosNY0IYHRQ.jpg";

export default function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <h1>Mes Tickes</h1>
      <div className="reserved-tickets-map">
        <div className="reserved-ticket">
          <div className="reserved-ticket-center">
            <div className="poster-container">
              <img src={posterImg} alt="ticket movie title" />
            </div>
            <div className="reserved-ticket-text-info">
              <h2>Gardians of The Galaxy Vol.2</h2>
              <h3>Cinema Ahmed Bey</h3>
              <p>le 14-12 à 12h</p>
              <p>3 x tickets</p>
              <p>2400Da</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
