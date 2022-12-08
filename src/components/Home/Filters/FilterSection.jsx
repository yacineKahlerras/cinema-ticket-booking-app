import React from "react";
import Filter from "./Filter";

export default function FilterSection(props) {
  return (
    <div className="filter-container">
      <Filter filterLabel="Date" />
      <Filter filterLabel="Wilaya" />
      <Filter filterLabel="Cinema" />
    </div>
  );
}
