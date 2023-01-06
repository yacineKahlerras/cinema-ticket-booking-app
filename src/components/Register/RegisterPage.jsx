import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";
import FilterGeneric from "../Home/Filters/FilterGeneric";
import cibLogo from "../../assets/pay-cards-logos/cib-logo.svg";
import edahabiaLogo from "../../assets/pay-cards-logos/edahabia-logo.png";
import PaymentInfo from "./PaymentInfo";

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
    { value: "cib", label: "CIB", icon: cibLogo },
    { value: "edahabia", label: "Eddahabia", icon: edahabiaLogo },
  ];

  // go to next page
  function ContinueToNextPage() {
    if (paymentMethod.value === undefined) return;
    goNextPage();
  }

  // payment info element
  const paymentInfoList = [
    { label: "prix unitaire", value: `${price}Da` },
    { label: "nombres de billets", value: `${bookedSeats.length}` },
    { label: "sous-total", value: `${bookedSeats.length * price}Da` },
    { label: "frais supplémentaires", value: `0Da` },
    { label: "Totale", value: `${bookedSeats.length * price}Da` },
  ];

  return (
    <div className="payment-form-container">
      {/* payment info */}
      <PaymentInfo paymentInfoList={paymentInfoList} />

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
        <button
          className={paymentMethod.value ? "active-btn" : ""}
          onClick={ContinueToNextPage}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
