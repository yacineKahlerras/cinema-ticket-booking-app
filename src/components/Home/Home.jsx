import React from "react";
import FilterSection from "./Filters/FilterSection";
import { roomsList } from "../../data";

export default function Home() {
  return (
    <div className="home-container">
      <FilterSection />
    </div>
  );
}
