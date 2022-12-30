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
  const [schedule, setSchedule] = useState(movieSchedule);

  useEffect(() => {
    // getMovieSchedule(id);
  }, []);

  return <div className="schedule-container"></div>;
}
