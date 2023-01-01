import React from "react";
import CinemaSchedule from "./CinemaSchedule";

export default function CinemasMap(props) {
  const { schedule, cinemasList } = props;

  return (
    <div className="cinemas-schedule-map">
      {schedule.forEach((cinemaSchedule) => {
        let cinemaInfo = [];
        for (let cinemaIdx = 0; cinemaIdx < cinemasList.length; cinemaIdx++) {
          if (cinemaSchedule.cinemaId == cinemasList[cinemaIdx].id)
            cinemaInfo = cinemasList[cinemaIdx];
        }
        <CinemaSchedule
          cinemaSchedule={cinemaSchedule}
          cinemaInfo={cinemaInfo}
        />;
      })}
    </div>
  );
}
