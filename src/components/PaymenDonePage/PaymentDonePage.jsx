import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useLocation } from "react-router-dom";
import { posterLink } from "../../data";

export default function PaymentDonePage(props) {
  const location = useLocation();
  const { poster } = location.state;
  const posterSrc = `${posterLink}${poster}`;

  return (
    <div className="payment-completed-container">
      <div className="ticket-container">
        {/* poster background image */}
        <div className="poster-container">
          <img src={posterSrc} alt="ticke poster" />
        </div>

        {/* qr code */}
        <div className="qr-code-container">
          <QRCodeCanvas
            value={posterSrc}
            size={136}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
          />
        </div>
      </div>
    </div>
  );
}
