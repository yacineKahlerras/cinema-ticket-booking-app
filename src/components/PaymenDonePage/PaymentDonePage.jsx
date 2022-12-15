import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function PaymentDonePage(props) {
  //   const { bookedSeats } = props;

  return (
    <div className="payment-completed-container">
      <QRCodeCanvas
        value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
        size={136}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
    </div>
  );
}
