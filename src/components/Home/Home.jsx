import React, { createContext, useEffect, useState } from "react";
import EventsMap from "./eventsMap/EventsMap";
import FilterSection from "./Filters/FilterSection";

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
        <FilterSection />
        <EventsMap />
      </div>
    </FilterParamsContext.Provider>
  );
}
