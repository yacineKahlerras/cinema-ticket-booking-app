import React, { createContext, useEffect, useState } from "react";
import EventsMap from "@/components/eventsMap/EventsMap.jsx";
import "./style/_index.scss";

export const FilterParamsContext = createContext();

export default function Home() {
  const [wilaya, setWilaya] = useState({ value: "all", label: "Tous" });
  const [cinema, setCinema] = useState({ value: "all", label: "Tous" });

  useEffect(() => {
    setCinema({ value: "all", label: "Tous" });
  }, [wilaya]);

  const filterParams = {
    wilaya: wilaya,
    setWilaya: setWilaya,
    cinema: cinema,
    setCinema: setCinema,
  };

  return (
    <FilterParamsContext.Provider value={filterParams}>
      <div className="home-container">
        <EventsMap />
      </div>
    </FilterParamsContext.Provider>
  );
}
