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
    if (filterLabel === "Wilaya") {
      const newList = roomsList.map((room) => {
        return { value: room.wilaya, label: room.wilaya };
      });
      return newList;
    }
    const newList = roomsList.map((room) => {
      return { value: room.id, label: room.title };
    });
    return newList;
  }

  return (
    <div className="filter">
      <span className="filter-label">{filterLabel}</span>
      <Select onChange={setValue} options={FilterList()} />
    </div>
  );
}
