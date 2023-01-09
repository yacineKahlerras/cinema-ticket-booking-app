import React from "react";
import CinemaSchedule from "./CinemaSchedule";

export default function CinemasMap(props) {
  const { schedule, cinemasList } = props;

  return (
    <div className="cinemas-schedule-map">
      {schedule.map((cinemaSchedule, index) => {
        let cinemaInfo = null;
        for (let cinemaIdx = 0; cinemaIdx < cinemasList.length; cinemaIdx++) {
          if (cinemaSchedule.cinemaId == cinemasList[cinemaIdx].id)
            cinemaInfo = cinemasList[cinemaIdx];
        }
        return (
          <CinemaSchedule
            key={index}
            cinemaSchedule={cinemaSchedule}
            cinemaInfo={cinemaInfo}
          />
        );
      })}
    </div>
  );
}
