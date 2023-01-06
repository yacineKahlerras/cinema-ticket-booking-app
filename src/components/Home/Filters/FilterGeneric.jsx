import React from "react";
import Select, { components } from "react-select";
import { Component } from "react";

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
          options={newOptions}
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

const IconOption = (props) => (
  <components.Option {...props}>
    {props.data.label}
    {props.data.icon}
  </components.Option>
);

const Control = ({ children, ...props }) => (
  <components.Control {...props}>{children}</components.Control>
);

const SingleValue = (props) => (
  <components.SingleValue {...props}>
    {props.data.label}
    {props.data.icon}
  </components.SingleValue>
);
