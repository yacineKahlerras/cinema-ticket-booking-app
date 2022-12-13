import React from "react";
import emptyStreet from "../../../assets/empty-street.svg";

export default function NoEventError() {
  return (
    <div className="no-events-container">
      <h3>Sorry no available events yet..</h3>
      <img src={emptyStreet} alt="empty street" />
    </div>
  );
}
