import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import gridInfoGenerator from "./SeatPickerMethods";
import Seat from "./Seat";

export default function SeatPicker() {
  const gridInfo = {
    columns: 4,
    rows: 4,
  };
  const bookedSeats = [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
  ];
  console.log(gridInfoGenerator(gridInfo, bookedSeats));

  return <h1></h1>;
}

/**
 * create an object {col, row, booked}
 * make an array with the number of columns
 * add that same array to another with the number of columns
 * with a list of already booked seats change the 'booked' value
 * based on that list make row divs and add them with a number of columns on to objects
 */

function seatElements(gridInfo) {
  const seatMap = gridInfo.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="row-seats">
        {row.map((individualSeat, columnIndex) => {
          return (
            <Seat
              key={`${rowIndex}${columnIndex}`}
              booked={individualSeat.booked}
            />
          );
        })}
      </div>
    );
  });
}
