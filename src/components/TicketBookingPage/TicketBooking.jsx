import React, { useEffect, useState } from "react";
import PaymentPage from "../Payment/PaymentPage";
import RegisterPage from "../Register/RegisterPage";
import SeatPicker from "../SeatPicker/SeatPicker";
import { useLocation, useSearchParams } from "react-router-dom";
import { CinemaDataContext, CurrenMovieScheduleContext } from "../../App";
import { getMovieSchedule } from "../../firebase/dataFetcher";
import { movieSchedule } from "../../data";
import { useContext } from "react";

export default function TicketBooking() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [bookingStep, setBookingStep] = useState("register");
  const [paymentMethod, setPaymentMethod] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get("movieId");
  const cinemaId = searchParams.get("cinemaId");
  const language = searchParams.get("language");

  const _currenMovieScheduleContext = useContext(CurrenMovieScheduleContext);
  console.log(_currenMovieScheduleContext.currenMovieSchedule);
  useEffect(() => {
    if (!_currenMovieScheduleContext.currenMovieSchedule) {
      // getMovieSchedule(movieId, _currenMovieScheduleContext.setCurrenMovieSchedule);
      _currenMovieScheduleContext.setCurrenMovieSchedule(movieSchedule);
    }
  }, []);

  // location state vars
  const locationState = useLocation().state;
  const { dateInfo } = locationState;

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
            unavailableSeats={dateInfo.takenSeats}
            bookedSeats={bookedSeats}
            goNextPage={() => GotToPage("register")}
            setBookedSeats={setBookedSeats}
          />
        );
    }
  }

  return <>{BookingStepPage()}</>;
}
