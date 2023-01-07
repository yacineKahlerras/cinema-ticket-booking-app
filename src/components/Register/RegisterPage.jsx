import React, { useContext } from "react";
import FilterGeneric from "../Home/Filters/FilterGeneric";
import cibLogo from "../../assets/pay-cards-logos/cib-logo.svg";
import edahabiaLogo from "../../assets/pay-cards-logos/edahabia-logo.png";
import PaymentInfo from "./PaymentInfo";
import { UserContext } from "../../App";
import GoogleBtnElements from "./GoogleBtnElements";

export default function RegisterPage(props) {
  const {
    bookedSeats,
    goNextPage,
    goPreviousPage,
    setPaymentMethod,
    paymentMethod,
    price,
  } = props;
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.email != null;

  // payment method options
  const paymentOptions = [
    { value: "cib", label: "CIB", icon: cibLogo },
    { value: "edahabia", label: "Eddahabia", icon: edahabiaLogo },
  ];

  // payment info list
  const paymentInfoList = [
    { label: "prix unitaire", value: `${price}Da` },
    { label: "nombres de billets", value: `${bookedSeats.length}` },
    { label: "sous-total", value: `${bookedSeats.length * price}Da` },
    { label: "frais supplémentaires", value: `0Da` },
    { label: "Totale", value: `${bookedSeats.length * price}Da` },
  ];

  // go to next page
  function ContinueToNextPage() {
    if (paymentMethod.value === undefined && hasUser) return;
    goNextPage();
  }

  return (
    <div className="payment-form-container">
      {/* payment info */}
      <PaymentInfo paymentInfoList={paymentInfoList} />

      {/* google register */}
      <div className="payment-method-container google-register-container">
        <h1>Se Connecter</h1>
        <GoogleBtnElements user={user} hasUser={hasUser} />
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
        <button
          className={paymentMethod.value && hasUser ? "active-btn" : ""}
          onClick={ContinueToNextPage}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}
