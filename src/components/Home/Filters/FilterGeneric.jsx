import React from "react";
import Select from "react-select";

export default function FilterGeneric(props) {
  const { filterLabel, options, changeHandler, paymentMethod } = props;

  return (
    <div className="filter-container">
      <div className="filter">
        <span className="filter-label">{filterLabel}</span>
        <Select
          value={paymentMethod}
          onChange={changeHandler}
          options={options}
          defaultValue={paymentMethod}
        />
      </div>
    </div>
  );
}
