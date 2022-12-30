import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export function SchedulePageLoader({ params }) {
  return params.eventTitle;
}

export default function MovieSchedule() {
  const linkParams = useLoaderData();
  const id = linkParams.match(/(\w+)/g)[0];

  useEffect(() => {});

  return <div className="schedule-container"></div>;
}
