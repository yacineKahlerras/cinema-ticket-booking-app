import React from "react";

export default function Seat(props) {
  const { booked } = props;

  return <button style={{ color: booked ? "red" : "inherit" }}>seat</button>;
}
