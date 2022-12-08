import React, { useContext, useState } from "react";
import Select from "react-select";
import { roomsList } from "../../../data";
import { FilterParamsContext } from "../Home";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Filter(props) {
  const { filterLabel } = props;
  const filterParams = useContext(FilterParamsContext);
  const changeHandler =
    filterLabel === "Wilaya" ? filterParams.setWilaya : filterParams.setCinema;

  function FilterList() {
    const newList = new Set();
    if (filterLabel === "Wilaya") {
      return [
        { value: "alger", label: "Alger" },
        { value: "constantine", label: "Constantine" },
        { value: "oran", label: "Oran" },
      ];
    }
    roomsList.forEach((room) => {
      newList.add({ value: room.id, label: room.title });
    });
    return Array.from(newList);
  }

  return (
    <div className="filter">
      <span className="filter-label">{filterLabel}</span>
      <Select onChange={changeHandler} options={FilterList()} />
    </div>
  );
}
