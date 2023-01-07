import React, { useContext } from "react";
import FilterGeneric from "../Home/Filters/FilterGeneric";
import cibLogo from "../../assets/pay-cards-logos/cib-logo.svg";
import edahabiaLogo from "../../assets/pay-cards-logos/edahabia-logo.png";
import PaymentInfo from "./PaymentInfo";
import GoogleButton from "react-google-button";
import { SignIn } from "../../firebase/googleAuth";
import { UserContext } from "../../App";
import LoadingSpinner from "../Nav/LoadingSpinner";

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
    if (paymentMethod.value === undefined) return;
    goNextPage();
  }

  return (
    <div className="payment-form-container">
      {/* payment info */}
      <PaymentInfo paymentInfoList={paymentInfoList} />

      {/* google register */}
      <div className="payment-method-container google-register-container">
        <h1>Se Connecter</h1>
        <GoogleBtnElements />
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
          className={paymentMethod.value ? "active-btn" : ""}
          onClick={ContinueToNextPage}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}

function GoogleBtnElements() {
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;
  const isSignInLoading = localStorage.getItem("isSignInLoading");

  const googleBtn = (
    <GoogleButton
      className="google-btn"
      label="Se Connecter"
      onClick={SignIn}
    />
  );

  const userInfoElement =
    user && user.email ? (
      <h3 className="user-info">
        {user.email}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </h3>
    ) : (
      ""
    );

  return hasUser ? (
    userInfoElement
  ) : isSignInLoading ? (
    <LoadingSpinner />
  ) : (
    googleBtn
  );
}
