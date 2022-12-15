import React, { useState } from "react";
import PaymentDonePage from "../PaymenDonePage/PaymentDonePage";
import PaymentPage from "../Payment/PaymentPage";
import RegisterPage from "../Register/RegisterPage";
import SeatPicker from "../SeatPicker/SeatPicker";

export default function TicketBooking() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [bookingStep, setBookingStep] = useState("seatPicker");
  const [paymentMethod, setPaymentMethod] = useState("");

  const gridInfo = {
    columns: 10,
    rows: 8,
  };
  const unavailableSeats = [
    { row: 0, col: 0 },
    { row: 2, col: 3 },
    { row: 2, col: 4 },
    { row: 5, col: 0 },
    { row: 5, col: 6 },
  ];

  function GotToPage(pageTitle) {
    setBookingStep(pageTitle);
  }

  function BookingStepPage() {
    switch (bookingStep) {
      case "register":
        return (
          <RegisterPage
            bookedSeats={bookedSeats}
            goNextPage={() => GotToPage("payment")}
            goPreviousPage={() => GotToPage("seatPicker")}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        );

      case "payment":
        return (
          <PaymentPage
            bookedSeats={bookedSeats}
            goNextPage={() => GotToPage("paymentCompleted")}
            goPreviousPage={() => GotToPage("register")}
            paymentMethod={paymentMethod}
          />
        );

      case "paymentCompleted":
        return <PaymentDonePage />;

      default:
        return (
          <SeatPicker
            gridInfo={gridInfo}
            unavailableSeats={unavailableSeats}
            bookedSeats={bookedSeats}
            goNextPage={() => GotToPage("register")}
            setBookedSeats={setBookedSeats}
          />
        );
    }
  }

  return <>{BookingStepPage()}</>;
}
