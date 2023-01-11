import React, { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
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

  // search params
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  console.log(scheduleData);

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

const schesche = {
  schedule: [
    {
      cinemaId: "h2Qgg",
      dates: [
        {
          date: {
            seconds: 1673352000,
            nanoseconds: 0,
          },
          language: "eng",
          takenSeats: [
            {
              row: 7,
              col: 1,
            },
            {
              col: 7,
              row: 0,
            },
            {
              col: 7,
              row: 4,
            },
            {
              row: 2,
              col: 9,
            },
            {
              row: 6,
              col: 1,
            },
          ],
        },
        {
          language: "vostfr",
          takenSeats: [
            {
              row: 3,
              col: 5,
            },
            {
              col: 7,
              row: 0,
            },
            {
              col: 7,
              row: 0,
            },
            {
              col: 1,
              row: 7,
            },
            {
              row: 7,
              col: 4,
            },
          ],
          date: {
            seconds: 1672884000,
            nanoseconds: 0,
          },
        },
        {
          date: {
            seconds: 1673625600,
            nanoseconds: 0,
          },
          takenSeats: [
            {
              row: 7,
              col: 9,
            },
            {
              col: 4,
              row: 5,
            },
            {
              row: 6,
              col: 7,
            },
            {
              row: 1,
              col: 8,
            },
            {
              col: 2,
              row: 4,
            },
          ],
          language: "fr",
        },
      ],
    },
    {
      cinemaId: "ri-rG",
      dates: [
        {
          takenSeats: [
            {
              col: 4,
              row: 0,
            },
            {
              row: 4,
              col: 8,
            },
            {
              col: 7,
              row: 2,
            },
            {
              row: 3,
              col: 6,
            },
            {
              col: 1,
              row: 3,
            },
          ],
          date: {
            seconds: 1673488800,
            nanoseconds: 0,
          },
          language: "eng",
        },
        {
          takenSeats: [
            {
              row: 0,
              col: 9,
            },
            {
              col: 3,
              row: 2,
            },
            {
              row: 1,
              col: 8,
            },
            {
              col: 5,
              row: 0,
            },
            {
              row: 2,
              col: 6,
            },
          ],
          date: {
            seconds: 1672916400,
            nanoseconds: 0,
          },
          language: "vostfr",
        },
        {
          takenSeats: [
            {
              col: 4,
              row: 1,
            },
            {
              row: 1,
              col: 9,
            },
            {
              row: 7,
              col: 1,
            },
            {
              row: 6,
              col: 9,
            },
            {
              col: 6,
              row: 3,
            },
          ],
          language: "fr",
          date: {
            seconds: 1673197200,
            nanoseconds: 0,
          },
        },
      ],
    },
    {
      dates: [
        {
          takenSeats: [
            {
              col: 2,
              row: 2,
            },
            {
              col: 5,
              row: 6,
            },
            {
              row: 6,
              col: 4,
            },
            {
              col: 7,
              row: 4,
            },
            {
              col: 1,
              row: 0,
            },
          ],
          date: {
            seconds: 1673128800,
            nanoseconds: 0,
          },
          language: "eng",
        },
        {
          language: "vostfr",
          takenSeats: [
            {
              row: 6,
              col: 6,
            },
            {
              col: 3,
              row: 5,
            },
            {
              col: 5,
              row: 7,
            },
            {
              col: 4,
              row: 1,
            },
            {
              col: 9,
              row: 6,
            },
          ],
          date: {
            seconds: 1673474400,
            nanoseconds: 0,
          },
        },
        {
          date: {
            seconds: 1673636400,
            nanoseconds: 0,
          },
          language: "fr",
          takenSeats: [
            {
              col: 7,
              row: 5,
            },
            {
              col: 6,
              row: 7,
            },
            {
              row: 4,
              col: 6,
            },
            {
              col: 8,
              row: 4,
            },
            {
              row: 1,
              col: 2,
            },
          ],
        },
      ],
      cinemaId: "Rvmff",
    },
    {
      cinemaId: "NKy7N",
      dates: [
        {
          date: {
            seconds: 1672696800,
            nanoseconds: 0,
          },
          language: "eng",
          takenSeats: [
            {
              row: 4,
              col: 5,
            },
            {
              col: 3,
              row: 0,
            },
            {
              col: 4,
              row: 7,
            },
            {
              col: 2,
              row: 5,
            },
            {
              row: 2,
              col: 2,
            },
          ],
        },
        {
          date: {
            seconds: 1673553600,
            nanoseconds: 0,
          },
          takenSeats: [
            {
              row: 3,
              col: 6,
            },
            {
              col: 6,
              row: 1,
            },
            {
              col: 1,
              row: 0,
            },
            {
              row: 5,
              col: 1,
            },
            {
              row: 2,
              col: 5,
            },
          ],
          language: "vostfr",
        },
        {
          date: {
            seconds: 1673110800,
            nanoseconds: 0,
          },
          takenSeats: [
            {
              col: 1,
              row: 3,
            },
            {
              col: 4,
              row: 3,
            },
            {
              col: 7,
              row: 3,
            },
            {
              col: 7,
              row: 2,
            },
            {
              col: 7,
              row: 1,
            },
          ],
          language: "fr",
        },
      ],
    },
    {
      dates: [
        {
          language: "eng",
          takenSeats: [
            {
              col: 3,
              row: 5,
            },
            {
              col: 8,
              row: 0,
            },
            {
              col: 5,
              row: 6,
            },
            {
              row: 5,
              col: 5,
            },
            {
              col: 1,
              row: 5,
            },
          ],
          date: {
            seconds: 1673236800,
            nanoseconds: 0,
          },
        },
        {
          takenSeats: [
            {
              col: 3,
              row: 0,
            },
            {
              row: 1,
              col: 6,
            },
            {
              row: 0,
              col: 8,
            },
            {
              col: 2,
              row: 4,
            },
            {
              row: 2,
              col: 9,
            },
          ],
          language: "vostfr",
          date: {
            seconds: 1673560800,
            nanoseconds: 0,
          },
        },
        {
          takenSeats: [
            {
              row: 2,
              col: 9,
            },
            {
              col: 7,
              row: 3,
            },
            {
              row: 0,
              col: 5,
            },
            {
              col: 3,
              row: 7,
            },
            {
              row: 2,
              col: 6,
            },
          ],
          language: "fr",
          date: {
            seconds: 1672884000,
            nanoseconds: 0,
          },
        },
      ],
      cinemaId: "Tldge",
    },
    {
      cinemaId: "n4pdv",
      dates: [
        {
          takenSeats: [
            {
              row: 3,
              col: 5,
            },
            {
              col: 0,
              row: 3,
            },
            {
              row: 1,
              col: 9,
            },
            {
              row: 3,
              col: 2,
            },
            {
              col: 4,
              row: 0,
            },
          ],
          date: {
            seconds: 1672743600,
            nanoseconds: 0,
          },
          language: "eng",
        },
        {
          date: {
            seconds: 1673420400,
            nanoseconds: 0,
          },
          language: "vostfr",
          takenSeats: [
            {
              col: 0,
              row: 1,
            },
            {
              col: 0,
              row: 6,
            },
            {
              col: 4,
              row: 6,
            },
            {
              row: 2,
              col: 4,
            },
            {
              row: 2,
              col: 4,
            },
          ],
        },
        {
          language: "fr",
          date: {
            seconds: 1672855200,
            nanoseconds: 0,
          },
          takenSeats: [
            {
              row: 6,
              col: 3,
            },
            {
              row: 3,
              col: 5,
            },
            {
              col: 9,
              row: 5,
            },
            {
              row: 7,
              col: 9,
            },
            {
              row: 3,
              col: 6,
            },
          ],
        },
      ],
    },
  ],
  title: "ticket to paradise",
};
