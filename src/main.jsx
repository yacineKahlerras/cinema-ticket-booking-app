import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import EventPage from "./components/Events/EventPage";
import TicketBooking from "./components/TicketBookingPage/TicketBooking";
import PaymentDonePage from "./components/PaymenDonePage/PaymentDonePage";
import Rooms from "./components/Rooms/Rooms";
import Room, { RoomLoader } from "./components/Rooms/Room";
import AboutUs from "./components/AboutUs/AboutUs";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "EventPage",
        element: <EventPage />,
      },
      {
        path: "TicketBooking",
        element: <TicketBooking />,
      },
      {
        path: "PaymentCompleted",
        element: <PaymentDonePage />,
      },
      {
        path: "Rooms",
        element: <Rooms />,
      },
      {
        path: "Room/:roomId",
        element: <Room />,
        loader: RoomLoader,
      },
      {
        path: "About-Us",
        element: <AboutUs />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
