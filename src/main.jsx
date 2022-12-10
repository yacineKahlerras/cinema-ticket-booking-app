import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import EventPage from "./components/Events/EventPage";
import SeatPicker from "./components/SeatPicker/SeatPicker";
import RegisterPage from "./components/Register/RegisterPage";

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
        path: "SeatPicker",
        element: <SeatPicker />,
      },
      {
        path: "Register",
        element: <RegisterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
