import React from "react";
import { useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";
import FilterGeneric from "../Home/Filters/FilterGeneric";
import cibLogo from "../../assets/pay-cards-logos/cib-logo.svg";
import edahabiaLogo from "../../assets/pay-cards-logos/edahabia-logo.png";

export default function PaymentInfo({ paymentInfoList }) {
  return (
    <div className="payment-info">
      {paymentInfoList.map((info, index) => {
        return (
          <div key={index}>
            <span className="payment-info-label">{info.label}</span>
            <span className="payment-info-value">{info.value}</span>
          </div>
        );
      })}
    </div>
  );
}
