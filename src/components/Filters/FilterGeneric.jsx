import React from "react";
import Select, { components } from "react-select";
import { Component } from "react";
import { Control, IconOption, SingleValue } from "./ReactSelectComponents";

export default function FilterGeneric(props) {
  const {
    filterLabel,
    options,
    changeHandler,
    defaultValue,
    placeholder,
    hasIcons,
  } = props;

  return (
    <div className="filter-container">
      <div className="filter">
        <span className="filter-label">{filterLabel}</span>
        <Select
          isSearchable={false}
          onChange={changeHandler}
          options={options}
          defaultValue={defaultValue}
          components={
            hasIcons
              ? {
                  Control: Control,
                  Option: IconOption,
                  SingleValue: SingleValue,
                }
              : {}
          }
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
