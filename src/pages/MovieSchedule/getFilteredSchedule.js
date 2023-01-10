/**loops through list of cinema to find the cinema that
 * matches the cinemaId then looks if it matches the wilayaSelector
 * returns a list of all the "wilayaSelector" matches
 */
export default function getFilteredSchedule(
  scheduleData,
  cinemasListData,
  wilayaFilter
) {
  return scheduleData.schedule.filter((cinemaData) => {
    const currentCinemaId = cinemaData.cinemaId;
    let wilaya = null;
    for (let cinemaIdx = 0; cinemaIdx < cinemasListData.length; cinemaIdx++) {
      if (cinemasListData[cinemaIdx].id == currentCinemaId) {
        wilaya = cinemasListData[cinemaIdx].wilaya;
        break;
      }
    }
    return wilaya == wilayaFilter.value;
  });
}
