import React, { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CinemasMap from "./CinemasMap";
import { CinemaDataContext, CurrenMovieScheduleContext } from "../../App";
import { movieSchedule } from "../../data";
import "./style/_index.scss";
import getFilteredSchedule from "./getFilteredSchedule";
import FilterGeneric from "@/components/Filters/FilterGeneric";

export const MovieIsContext = createContext();

export function SchedulePageLoader({ params }) {
  return params.eventTitle;
}

export default function MovieSchedule() {
  const linkParams = useLoaderData();
  const movieId = linkParams.match(/(\w+)/g)[0];
  const [scheduleData, setScheduleData] = useState(movieSchedule);
  const _currenMovieScheduleContext = useContext(CurrenMovieScheduleContext);
  const [wilayaFilter, setWilayaFilter] = useState({
    value: "tous",
    label: "Tous",
  });

  // cinema data
  const cinemasData = useContext(CinemaDataContext);
  const cinemasListData = cinemasData.cinemasListData.list;
  const title = scheduleData.title;

  const schedule =
    wilayaFilter.value == "tous"
      ? scheduleData.schedule
      : getFilteredSchedule(scheduleData, cinemasListData, wilayaFilter);

  const options = [
    { value: "tous", label: "Tous" },
    { value: "alger", label: "Alger" },
    { value: "constantine", label: "Constantine" },
    { value: "oran", label: "Oran" },
  ];

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

        <FilterGeneric
          filterLabel="Wilaya"
          options={options}
          changeHandler={setWilayaFilter}
          defaultValue={wilayaFilter}
          placeholder="Tous Les Wilaya"
          hasIcons={false}
        />

        <CinemasMap schedule={schedule} cinemasList={cinemasListData} />
      </div>
    </MovieIsContext.Provider>
  );
}
