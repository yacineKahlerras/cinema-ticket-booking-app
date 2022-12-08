import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Filter(props) {
  const [value, setValue] = useState("okay");

  console.log(value.value);

  return (
    <>
      <Select value={value} onChange={setValue} options={options} />
    </>
  );
}
