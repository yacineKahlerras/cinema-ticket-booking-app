import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import EventPage, { EventPageLoader } from "./pages/EventPage/EventPage";
import TicketBooking from "./pages/TicketBookingPage/TicketBooking";
import PaymentDonePage from "./pages/PaymenDonePage/PaymentDonePage";
import Rooms from "./pages/Rooms/Rooms";
import Room, { RoomLoader } from "./pages/Rooms/Room";
import AboutUs from "./pages/AboutUs/AboutUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import MovieSchedule, {
  SchedulePageLoader,
} from "./pages/MovieSchedule/MovieSchedule";

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
      {
        path: "EventPage/:eventTitle",
        loader: EventPageLoader,
        element: <EventPage />,
      },
      {
        path: "MovieSchedule/:eventTitle",
        loader: SchedulePageLoader,
        element: <MovieSchedule />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
