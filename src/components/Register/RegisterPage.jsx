import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";
import FilterGeneric from "../Home/Filters/FilterGeneric";

export default function RegisterPage(props) {
  const {
    bookedSeats,
    goNextPage,
    goPreviousPage,
    setPaymentMethod,
    paymentMethod,
  } = props;

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

  // payment method options
  const paymentOptions = [
    { value: "paypal", label: "Paypal" },
    { value: "societeGenerale", label: "Societé Generale" },
  ];

  // go to next page
  function ContinueToNextPage() {
    if (paymentMethod.value === undefined) return;
    goNextPage();
  }

  return (
    <div className="payment-form-container">
      {/* payment info */}
      <div className="payment-info">
        <div>
          <span className="payment-info-label">unit cost</span>
          <span className="payment-info-value">{price}Da</span>
        </div>
        <div>
          <span className="payment-info-label">ticket count</span>
          <span className="payment-info-value">{bookedSeats.length}</span>
        </div>
        <div>
          <span className="payment-info-label">subtotal</span>
          <span className="payment-info-value">
            {bookedSeats.length * price}Da
          </span>
        </div>
        <div>
          <span className="payment-info-label">additional fees</span>
          <span className="payment-info-value">0Da</span>
        </div>
        <div>
          <span className="payment-info-label">Total ammount</span>
          <span className="payment-info-value">
            {bookedSeats.length * price}Da
          </span>
        </div>
      </div>

      {/* payment method */}
      <div className="payment-method-container">
        <h1>Payment Method</h1>
        <FilterGeneric
          filterLabel=""
          options={paymentOptions}
          changeHandler={setPaymentMethod}
          paymentMethod={paymentMethod}
        />
      </div>

      {/* continue button */}
      <div className="booking-navigation-buttons">
        <button className="back-btn" onClick={goPreviousPage}>
          Back
        </button>
        <button onClick={ContinueToNextPage}>Continue</button>
      </div>
    </div>
  );
}
