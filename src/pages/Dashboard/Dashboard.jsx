import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../App";
import { GetUserTickets } from "../../firebase/dataFetcher";
import ReservedTickets from "./ReservedTicket";
import "./style/_index.scss";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [userTicketsList, setUserTicketsList] = useState({});
  const [ticketElement, setTicketElement] = useState([]);

  useEffect(() => {
    if (user.uid) GetUserTickets(user.uid, setUserTicketsList);
  }, [user]);

  if (!ticketElement.length) {
    for (const movieKey in userTicketsList) {
      const movieData = userTicketsList[movieKey];
      setTicketElement((oldValue) => {
        oldValue.push(
          <ReservedTickets
            key={movieKey}
            movieData={movieData}
            movieId={movieKey}
          />
        );
        return [...oldValue];
      });
    }
  }

  return (
    <div className="dashboard-container">
      <h1>Mes Tickets</h1>
      <div className="reserved-tickets-map">
        {ticketElement.length ? (
          ticketElement
        ) : (
          <p>vous n'avez pas encore achetez de tickets.</p>
        )}
      </div>
    </div>
  );
}
