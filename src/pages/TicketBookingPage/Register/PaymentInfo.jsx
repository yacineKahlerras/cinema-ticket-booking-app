import React from "react";

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
