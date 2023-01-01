import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { cinemasListObject, movieSchedule } from "../../data";
import { getCinemasList, getMovieSchedule } from "../../firebase/dataFetcher";

export function SchedulePageLoader({ params }) {
  return params.eventTitle;
}

export default function MovieSchedule() {
  const linkParams = useLoaderData();
  const id = linkParams.match(/(\w+)/g)[0];
  const [scheduleData, setScheduleData] = useState(movieSchedule);
  const [cinemasListData, setCinemasListData] = useState(cinemasListObject);
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
    // getCinemasList();
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
        <CinemaSchedule
          scheduleData={scheduleData}
          cinemasListData={cinemasListData}
        />
      </div>
    </div>
  );
}

function CinemaSchedule(props) {
  const { scheduleData, cinemasListData } = props;

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
