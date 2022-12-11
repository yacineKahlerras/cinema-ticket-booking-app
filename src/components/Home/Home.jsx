import React, { createContext, useEffect, useState } from "react";
import EventsMap from "./eventsMap/EventsMap";
import FilterSection from "./Filters/FilterSection";

export const FilterParamsContext = createContext();

export default function Home() {
  const [wilaya, setWilaya] = useState({ value: "all", label: "All" });
  const [cinema, setCinema] = useState({ value: "all", label: "All" });

  useEffect(() => {
    setCinema({ value: "all", label: "All" });
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
