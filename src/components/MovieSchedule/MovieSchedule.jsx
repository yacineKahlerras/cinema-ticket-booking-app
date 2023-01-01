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

  return <div className="schedule-container"></div>;
}
