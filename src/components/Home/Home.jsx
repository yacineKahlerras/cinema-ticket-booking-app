import React, { createContext, useEffect, useState } from "react";
import EventsMap from "./eventsMap/EventsMap";
import FilterSection from "./Filters/FilterSection";
import { roomsList } from "../../data";

export const FilterParamsContext = createContext();

export default function Home() {
  const [wilaya, setWilaya] = useState("all");
  const [cinema, setCinema] = useState("all");

  useEffect(() => {
    setCinema("all");
  }, [wilaya]);

  useEffect(() => {
    roomsList.forEach((room) => {
      if (room.id === cinema.value) {
        setWilaya("all");
      }
    });
  }, [cinema]);

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
