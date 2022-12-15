import React from "react";

export default function PaymentPage(props) {
  const { bookedSeats, goNextPage, goPreviousPage, paymentMethod } = props;

  return (
    <div className="payment-page-container">
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
