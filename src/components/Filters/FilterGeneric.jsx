import React from "react";
import Select, { components } from "react-select";
import { Component } from "react";
import { Control, IconOption, SingleValue } from "./ReactSelectComponents";

export default function FilterGeneric(props) {
  const { filterLabel, options, changeHandler, paymentMethod } = props;

  return (
    <div className="filter-container">
      <div className="filter">
        <span className="filter-label">{filterLabel}</span>
        <Select
          isSearchable={false}
          onChange={changeHandler}
          options={options}
          defaultValue={paymentMethod}
          components={{
            Control: Control,
            Option: IconOption,
            SingleValue: SingleValue,
          }}
          placeholder="Selectioner une Carte.."
        />
      </div>
    </div>
  );
}
