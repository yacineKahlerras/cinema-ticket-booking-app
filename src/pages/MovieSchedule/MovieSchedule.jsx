import React, { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CinemasMap from "./CinemasMap";
import { CinemaDataContext, CurrenMovieScheduleContext } from "../../App";
import { movieSchedule } from "../../data";

export const MovieIsContext = createContext();

export function SchedulePageLoader({ params }) {
  return params.eventTitle;
}

export default function MovieSchedule() {
  const linkParams = useLoaderData();
  const movieId = linkParams.match(/(\w+)/g)[0];
  const [scheduleData, setScheduleData] = useState(movieSchedule);
  const _currenMovieScheduleContext = useContext(CurrenMovieScheduleContext);

  // cinema data
  const cinemasData = useContext(CinemaDataContext);
  const cinemasListData = cinemasData.cinemasListData;
  const setCinemasListData = cinemasData.setCinemasListData;
  const title = scheduleData.title;

  useEffect(() => {
    // getMovieSchedule(movieId);
    // getCinemasList();

    _currenMovieScheduleContext.setCurrenMovieSchedule(scheduleData);
  }, []);

  return (
    <MovieIsContext.Provider value={movieId}>
      <div className="schedule-container">
        <h1>{title}</h1>
        <p>
          choisisez l'heure et la langue dans la liste si dessous. vous pouvez
          utilisez le filtres de Wilaya, Cinemas et Langue pour filtrer les
          options que vous voulez.
        </p>

        <CinemasMap
          schedule={scheduleData.schedule}
          cinemasList={cinemasListData.list}
        />
      </div>
    </MovieIsContext.Provider>
  );
}
