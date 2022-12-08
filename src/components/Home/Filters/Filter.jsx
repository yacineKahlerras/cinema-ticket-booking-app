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

  console.log(value.value);

  return (
    <div className="filter">
      <span className="filter-label">{filterLabel}</span>
      <Select
        defaultValue={options[0].label}
        value={value}
        onChange={setValue}
        options={options}
      />
    </div>
  );
}
