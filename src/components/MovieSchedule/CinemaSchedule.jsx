import React from "react";

export default function CinemaSchedule(props) {
  const { cinemaSchedule, cinemaInfo } = props;

  function DatesMap(datesArray) {}

  return (
    <div className="cinema-schedule">
      <div className="cinema-title-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <span className="cinema-title">Cinema {scheduleData.title}</span>
      </div>
      <div className="cinema-dates-map">
        <div className="date-container">
          <span className="date">25 Jan</span>
          <span className="hour">19h</span>
          <span className="language">VOSTFR</span>
        </div>
        <div className="date-container">
          <span className="date">25 Jan</span>
          <span className="hour">19h</span>
          <span className="language">VOSTFR</span>
        </div>
        <div className="date-container">
          <span className="date">25 Jan</span>
          <span className="hour">19h</span>
          <span className="language">VOSTFR</span>
        </div>
      </div>
    </div>
  );
}
