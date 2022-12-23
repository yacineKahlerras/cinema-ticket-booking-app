import React from "react";
import ReservedTicket from "./ReservedTicket";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Mes Tickets</h1>
      <div className="reserved-tickets-map">
        <ReservedTicket />
        <ReservedTicket />
      </div>
    </div>
  );
}
