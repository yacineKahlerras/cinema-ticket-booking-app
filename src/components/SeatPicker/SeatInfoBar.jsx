import React from "react";

export default function SeatInfoBar() {
  return (
    <div className="seat-info-bar-container">
      <div className="info-bar">
        <span className="info-bar-state taken">reservé</span>
      </div>
      <div className="info-bar">
        <span className="info-bar-state selected">selectionné</span>
      </div>
      <div className="info-bar">
        <span className="info-bar-state available">disponible</span>
      </div>
    </div>
  );
}
