import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { cinemasListObject, movieSchedule } from "../../data";
import { getSortedDates } from "./getSortedDates";
import CinemasMap from "./CinemasMap";

export function SchedulePageLoader({ params }) {
  return params.eventTitle;
}

export default function MovieSchedule() {
  const linkParams = useLoaderData();
  const id = linkParams.match(/(\w+)/g)[0];
  const [scheduleData, setScheduleData] = useState(movieSchedule);
  const [cinemasListData, setCinemasListData] = useState(cinemasListObject);
  const title = scheduleData.title;
  let movieDatesArray = getSortedDates(scheduleData.schedule);

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

      <CinemasMap schedule={scheduleData.schedule} />
    </div>
  );
}
