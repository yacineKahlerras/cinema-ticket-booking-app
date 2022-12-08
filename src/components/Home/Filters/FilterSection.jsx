import React from "react";
import Filter from "./Filter";

export default function FilterSection(props) {
  return (
    <div className="filter-container">
      <Filter filterLabel="Location" />
    </div>
  );
}
