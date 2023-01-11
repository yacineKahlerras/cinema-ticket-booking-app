import getFilteredSchedule from "./getFilteredSchedule";

/**gets the schedule filtered by wilaya and cinema id params */
export default function getSchedule(
  scheduleData,
  cinemasListData,
  wilayaFilter,
  roomId
) {
  if (roomId) {
    return scheduleData.schedule.filter((cinema) => cinema.cinemaId == roomId);
  }
  const schedule =
    wilayaFilter.value == "tous"
      ? scheduleData.schedule
      : getFilteredSchedule(scheduleData, cinemasListData, wilayaFilter);

  return schedule;
}
