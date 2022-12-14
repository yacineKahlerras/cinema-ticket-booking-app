import React from "react";

export default function SeatInfoBar() {
  return (
    <div className="seat-info-bar-container">
      <div className="info-bar">
        <span className="info-bar-state taken">taken</span>
      </div>
      <div className="info-bar">
        <span className="info-bar-state selected">selected</span>
      </div>
      <div className="info-bar">
        <span className="info-bar-state available">available</span>
      </div>
    </div>
  );
}
