import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { movieSchedule } from "../../data";
import { getMovieSchedule } from "../../firebase/dataFetcher";

export function SchedulePageLoader({ params }) {
  return params.eventTitle;
}

export default function MovieSchedule() {
  const linkParams = useLoaderData();
  const id = linkParams.match(/(\w+)/g)[0];
  const [scheduleData, setScheduleData] = useState(movieSchedule);
  const schedule = scheduleData.schedule;
  const title = scheduleData.title;
  const movieDates = new Set();
  let movieDatesArray = [];

  for (let cinemaIdx = 0; cinemaIdx < schedule.length; cinemaIdx++) {
    const cinemaSchedule = schedule[cinemaIdx];
    for (let dateIdx = 0; dateIdx < cinemaSchedule.dates.length; dateIdx++) {
      const dateProgram = cinemaSchedule.dates[dateIdx];
      const seconds = dateProgram.date.seconds;
      movieDates.add(new Date(seconds * 1000).setHours(0, 0, 0, 0));
    }
  }

  movieDatesArray = Array.from(movieDates).sort();

  useEffect(() => {
    // getMovieSchedule(id);
  }, []);

  return (
    <div className="schedule-container">
      <h1>{title}</h1>
      <p>
        choisisez l'heure et la langue dans la liste si dessous. vous pouvez
        utilisez le filtres de Wilaya, Cinemas et Langue pour filtrer les
        options que vous voulez.
      </p>
      <div className="cinemas-schedule-map">
        {/* individual cinema schedule */}
        <div className="cinema-schedule">
          <div className="cinema-title-container">
            <span className="cinema-title">Cinema Ahmed Bay (Constantine)</span>
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
      </div>
    </div>
  );
}
