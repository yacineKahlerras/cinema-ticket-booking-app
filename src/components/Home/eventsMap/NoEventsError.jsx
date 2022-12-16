import React from "react";
import emptyStreet from "../../../assets/empty-street.svg";

export default function NoEventError() {
  return (
    <div className="no-events-container">
      <h3>Désolé, aucun événement disponible pour le moment..</h3>
      <img src={emptyStreet} alt="empty street" />
    </div>
  );
}
