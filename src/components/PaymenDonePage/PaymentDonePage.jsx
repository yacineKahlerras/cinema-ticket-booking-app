import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";

export default function PaymentDonePage(props) {
  const { bookedSeats, goNextPage, goPreviousPage, paymentMethod } = props;

  // getting search params
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const subRoomId = searchParams.get("subRoomId");
  const movieId = searchParams.get("movieId");

  // getting movie info
  const room = roomsList.filter((room) => room.id == roomId)[0];
  const hasSubRoom = subRoomId !== null;
  const movie = hasSubRoom
    ? room.subRooms[subRoomId].movies[movieId]
    : room.movies[parseInt(movieId)];
  const { poster, title, date, time, price, langue } = movie;

  return (
    <div className="payment-page-container">
      {/* card payment info */}
      <div className="payment-info">
        <div>
          <span className="payment-info-label">amount to pay :</span>
          <span className="payment-info-value">
            {bookedSeats.length * price}Da
          </span>
        </div>
        <div>
          <span className="payment-info-label">card name :</span>
          <span className="payment-info-value">{paymentMethod.label}</span>
        </div>
      </div>

      {/* card info forms */}
      <form>
        <div>
          <label>card number</label>
          <input
            type="password"
            placeholder="ex : 4870 1012 6523 948"
            defaultValue="4870 1012 6523 948"
            onChange={""}
          />
          <small></small>
        </div>
        <div>
          <label>expiry date</label>
          <input
            type="password"
            maxLength={5}
            placeholder="ex : 08-23"
            defaultValue="08-23"
            onChange={""}
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
            onChange={""}
          />
        </div>
      </form>

      {/* continue button */}
      <div className="booking-navigation-buttons">
        <button className="back-btn" onClick={goPreviousPage}>
          Back
        </button>
        <button onClick={goPreviousPage}>Continue</button>
      </div>
    </div>
  );
}
