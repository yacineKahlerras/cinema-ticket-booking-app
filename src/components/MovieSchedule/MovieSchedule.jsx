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

  useEffect(() => {
    // getMovieSchedule(id);
  }, []);

  return <div className="schedule-container"></div>;
}
