/** generates an array of rows that contains an object the seat's
 * state booked = true/false
 */
export default function gridInfoGenerator(gridInfo, bookedSeats) {
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
