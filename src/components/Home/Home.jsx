import React, { useState } from "react";
import FilterSection from "./Filters/FilterSection";

export default function Home() {
  const [wilaya, setWilaya] = useState("all");
  const [cinema, setCinema] = useState("all");

  return (
    <div className="home-container">
      <FilterSection />
    </div>
  );
}
