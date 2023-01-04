import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";

export default function PaymentPage(props) {
  const { bookedSeats, goPreviousPage, paymentMethod } = props;
  const {
    movieInfo: { movieId, cinemaId },
  } = props;
  const price = 800;

  return (
    <div className="payment-page-container">
      {/* card payment info */}
      <div className="payment-info">
        <div>
          <span className="payment-info-label">montant à payer :</span>
          <span className="payment-info-value">
            {bookedSeats.length * price}Da
          </span>
        </div>
        <div>
          <span className="payment-info-label">nom de carte :</span>
          <span className="payment-info-value">{paymentMethod.label}</span>
        </div>
      </div>

      {/* card info forms */}
      <form>
        <div>
          <label>numero de carte</label>
          <input
            type="password"
            placeholder="ex : 4870 1012 6523 948"
            defaultValue="4870 1012 6523 948"
          />
          <small></small>
        </div>
        <div>
          <label>date d'expiration</label>
          <input
            type="password"
            maxLength={5}
            placeholder="ex : 08-23"
            defaultValue="08-23"
          />
        </div>
        <div>
          <label>ccv/cvv</label>
          <input
            type="password"
            maxLength={3}
            max="3"
            placeholder="ex : 368"
            defaultValue="368"
          />
        </div>
      </form>

      {/* continue button */}
      <div className="booking-navigation-buttons">
        <button className="booking-btn back-btn" onClick={goPreviousPage}>
          Retour
        </button>
        <Link
          className="booking-btn active-btn"
          to="/PaymentCompleted"
          // state={{
          //   title: title,
          //   date: date,
          //   roomTitle: room.title,
          //   eventTime: time,
          //   bookedSeats: bookedSeats,
          // }}
        >
          Confirmer
        </Link>
      </div>
    </div>
  );
}
