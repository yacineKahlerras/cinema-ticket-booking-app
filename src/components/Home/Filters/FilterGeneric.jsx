import React from "react";
import Select, { components } from "react-select";
import { Component } from "react";

export default function FilterGeneric(props) {
  let { filterLabel, options, changeHandler, paymentMethod } = props;

  options = [
    { value: "England", label: "England", icon: "england.svg" },
    { value: "Germany", label: "Germany", icon: "germany.svg" },
  ];

  return (
    <div className="filter-container">
      <div className="filter">
        <span className="filter-label">{filterLabel}</span>
        <Select
          // value={paymentMethod}
          // onChange={changeHandler}
          options={options}
          // defaultValue={paymentMethod}
        />
      </div>
    </div>
  );
}

const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    <img
      src={require("./" + props.data.icon)}
      style={{ width: 36 }}
      alt={props.data.label}
    />
    {props.data.label}
  </Option>
);
