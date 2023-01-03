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
    price,
  } = props;

  // payment method options
  const paymentOptions = [
    { value: "cib", label: "CIB" },
    { value: "edahabia", label: "Eddahabia" },
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
          <span className="payment-info-label">prix unitaire</span>
          <span className="payment-info-value">{price}Da</span>
        </div>
        <div>
          <span className="payment-info-label">nombres de billets</span>
          <span className="payment-info-value">{bookedSeats.length}</span>
        </div>
        <div>
          <span className="payment-info-label">sous-total</span>
          <span className="payment-info-value">
            {bookedSeats.length * price}Da
          </span>
        </div>
        <div>
          <span className="payment-info-label">frais supplémentaires</span>
          <span className="payment-info-value">0Da</span>
        </div>
        <div>
          <span className="payment-info-label">Totale</span>
          <span className="payment-info-value">
            {bookedSeats.length * price}Da
          </span>
        </div>
      </div>

      {/* payment method */}
      <div className="payment-method-container">
        <h1>Methode de Payment</h1>
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
          Retour
        </button>
        <button onClick={ContinueToNextPage}>Continuer</button>
      </div>
    </div>
  );
}
