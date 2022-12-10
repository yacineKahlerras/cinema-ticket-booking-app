import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import EventPage from "./components/Events/EventPage";
import SeatPicker from "./components/SeatPicker/SeatPicker";

const router = createBrowserRouter([
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
        path: "SeatPicker",
        element: <SeatPicker />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
