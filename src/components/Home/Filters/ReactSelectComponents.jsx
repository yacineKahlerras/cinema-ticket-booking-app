import React from "react";
import { components } from "react-select";

export const IconOption = (props) => (
  <components.Option {...props}>
    <div className="option-component">
      <span className="option-label">{props.data.label}</span>
      <img
        className="option-logo"
        src={props.data.icon}
        alt={props.data.label}
      />
      {/* <span className="option-icon">{props.data.icon}</span> */}
    </div>
  </components.Option>
);

export const Control = ({ children, ...props }) => (
  <components.Control {...props}>{children}</components.Control>
);

export const SingleValue = (props) => (
  <components.SingleValue {...props}>
    <div className="single-value-component">
      <span className="single-value-label">{props.data.label}</span>
      <img
        className="single-value-logo"
        src={props.data.icon}
        alt={props.data.label}
      />
      {/* <span className="single-value-icon">{props.data.icon}</span> */}
    </div>
  </components.SingleValue>
);
