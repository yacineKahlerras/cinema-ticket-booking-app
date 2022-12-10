import Seat from "./Seat";

/** generates an array of rows that contains an object the seat's
 * state booked = true/false
 */
export function gridInfoGenerator(gridInfo, bookedSeats) {
  const rowInfoArray = new Array(gridInfo.columns);
  for (let i = 0; i < gridInfo.columns; i++) {
    rowInfoArray[i] = { booked: false };
  }
  const gridInfoArray = new Array(gridInfo.rows);
  for (let i = 0; i < gridInfo.rows; i++) {
    gridInfoArray[i] = JSON.parse(JSON.stringify(rowInfoArray));
  }
  for (let i = 0; i < bookedSeats.length; i++) {
    gridInfoArray[bookedSeats[i].row][bookedSeats[i].col].booked = true;
  }
  return gridInfoArray;
}

/** creates div rows that contain seat buttons based on
 * the seats array map
 */
export function seatElements(gridInfo) {
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
  return seatMap;
}
