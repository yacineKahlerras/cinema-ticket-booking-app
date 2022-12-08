import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Filter(props) {
  const { filterLabel } = props;
  const [value, setValue] = useState({ value: "chocolate" });

  return (
    <div className="filter">
      <span className="filter-label">{filterLabel}</span>
      <Select defaultValue={options[0]} onChange={setValue} options={options} />
    </div>
  );
}
