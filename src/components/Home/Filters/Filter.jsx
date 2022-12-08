import React, { useState } from "react";
import Select from "react-select";
import { roomsList } from "../../../data";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Filter(props) {
  const { filterLabel } = props;
  const [value, setValue] = useState({ value: "chocolate" });

  function FilterList() {
    const newList = new Set();
    if (filterLabel === "Wilaya") {
      roomsList.forEach((room) => {
        newList.add({ value: room.wilaya, label: room.wilaya });
      });
      return Array.from(newList);
    }
    roomsList.forEach((room) => {
      newList.add({ value: room.id, label: room.title });
    });
    return Array.from(newList);
  }

  console.log(Array.from(FilterList()));

  return (
    <div className="filter">
      <span className="filter-label">{filterLabel}</span>
      <Select onChange={setValue} options={FilterList()} />
    </div>
  );
}
