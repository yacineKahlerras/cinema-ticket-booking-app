import React, { useContext, useState } from "react";
import Select from "react-select";
import { roomsList } from "../../../data";
import { FilterParamsContext } from "../Home";

export default function Filter(props) {
  const { filterLabel } = props;
  const filterParams = useContext(FilterParamsContext);
  const changeHandler =
    filterLabel === "Wilaya" ? filterParams.setWilaya : filterParams.setCinema;
  const selectValue =
    filterLabel === "Wilaya" ? filterParams.wilaya : filterParams.cinema;

  function FilterList() {
    const newList = new Set();
    if (filterLabel === "Wilaya") {
      return [
        { value: "all", label: "All" },
        { value: "alger", label: "Alger" },
        { value: "constantine", label: "Constantine" },
        { value: "oran", label: "Oran" },
      ];
    }

    for (let i = 0; i < roomsList.length; i++) {
      if (
        filterParams.wilaya.value != "all" &&
        filterParams.wilaya.value != roomsList[i].wilaya
      )
        continue;
      newList.add({ value: roomsList[i].id, label: roomsList[i].title });
    }
    return Array.from(newList);
  }

  return (
    <div className="filter">
      <span className="filter-label">{filterLabel}</span>
      <Select
        value={selectValue}
        onChange={changeHandler}
        options={FilterList()}
      />
    </div>
  );
}
