import React from "react";
import Select, { components } from "react-select";
import { Component } from "react";
import { Control, IconOption, SingleValue } from "./ReactSelectComponents";

export default function FilterGeneric(props) {
  const { filterLabel, options, changeHandler, paymentMethod } = props;

  const newOptions = [
    { value: "England", label: "England", icon: "💀" },
    { value: "Germany", label: "Germany", icon: "🐢" },
  ];

  return (
    <div className="filter-container">
      <div className="filter">
        <span className="filter-label">{filterLabel}</span>
        <Select
          isSearchable={false}
          // value={paymentMethod}
          // onChange={changeHandler}
          options={options}
          defaultValue={options[0]}
          // defaultValue={paymentMethod}
          components={{
            Control: Control,
            Option: IconOption,
            SingleValue: SingleValue,
          }}
          placeholder="Select Country.."
        />
      </div>
    </div>
  );
}
