import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { GetUserTickets } from "../../firebase/dataFetcher";
import ReservedTicket from "./ReservedTicket";
import { nanoid } from "nanoid";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [userTicketsList, setUserTicketsList] = useState(userTicketsListObject);
  const ticketElement = [];

  useEffect(() => {
    // setUserTicketsList(GetUserTickets(user.uid));
  }, []);

  useEffect(() => {
    for (const movieKey in userTicketsList) {
      const movieData = userTicketsList[movieKey];
      for (const ticketKey in movieData) {
        const ticketData = movieData[ticketKey];
        ticketElement.push(
          <ReservedTicket Key={nanoid()} ticketData={ticketData} />
        );
      }
    }
  }, [userTicketsList]);

  return (
    <div className="dashboard-container">
      <h1>Mes Tickets</h1>
      <div className="reserved-tickets-map">{ticketElement}</div>
    </div>
  );
}

const userTicketsListObject = {
  882598: [
    {
      dateParts: {
        day: 7,
        month: "Janvier",
        dayOfWeek: "samedi",
        hour: 18,
        year: 2023,
      },
      cinemaName: "ibn khaldoun",
      seat: {
        col: 5,
        row: 7,
      },
      movieInfo: {
        price: 800,
        title: "smile",
        id: "882598",
      },
    },
    {
      movieInfo: {
        id: "882598",
        price: 800,
        title: "smile",
      },
      seat: {
        row: 7,
        col: 6,
      },
      cinemaName: "ibn khaldoun",
      dateParts: {
        month: "Janvier",
        day: 7,
        dayOfWeek: "samedi",
        hour: 18,
        year: 2023,
      },
    },
  ],
};
