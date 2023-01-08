import React, { useEffect, useState } from "react";
import PaymentPage from "../Payment/PaymentPage";
import RegisterPage from "../Register/RegisterPage";
import SeatPicker from "../SeatPicker/SeatPicker";
import { useSearchParams } from "react-router-dom";
import { CurrenMovieScheduleContext } from "../../App";
import { movieSchedule } from "../../data";
import { useContext } from "react";
import GetDateData from "./GetDateData";

export default function TicketBooking() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [bookingStep, setBookingStep] = useState("seatPicker");
  const [paymentMethod, setPaymentMethod] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get("movieId");
  const cinemaId = searchParams.get("cinemaId");
  const language = searchParams.get("language");
  const [dateInfo, setDateInfo] = useState();

  const _currenMovieScheduleContext = useContext(CurrenMovieScheduleContext);
  useEffect(() => {
    if (!_currenMovieScheduleContext) {
      // getMovieSchedule(movieId, _currenMovieScheduleContext.setCurrenMovieSchedule);
      _currenMovieScheduleContext.setCurrenMovieSchedule(movieSchedule);
    }

    setDateInfo(GetDateData(movieSchedule, cinemaId, language));
  }, []);

  const gridInfo = {
    columns: 10,
    rows: 8,
  };

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
            price={800}
          />
        );

      case "payment":
        return (
          <PaymentPage
            bookedSeats={bookedSeats}
            goPreviousPage={() => GotToPage("register")}
            paymentMethod={paymentMethod}
            movieInfo={{
              movieId: movieId,
              cinemaId: cinemaId,
              dateInfo: dateInfo,
            }}
          />
        );

      default:
        return (
          <SeatPicker
            gridInfo={gridInfo}
            unavailableSeats={dateInfo ? dateInfo.takenSeats : []}
            bookedSeats={bookedSeats}
            goNextPage={() => GotToPage("register")}
            setBookedSeats={setBookedSeats}
          />
        );
    }
  }

  return <>{BookingStepPage()}</>;
}
