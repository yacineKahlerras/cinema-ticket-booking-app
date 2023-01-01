import React from "react";
import CinemaSchedule from "./CinemaSchedule";

export default function CinemasMap(props) {
  const { schedule } = props;

  return (
    <div className="cinemas-schedule-map">
      {schedule.forEach((movieSchedule) => {
        <CinemaSchedule movieSchedule={movieSchedule} />;
      })}
    </div>
  );
}
