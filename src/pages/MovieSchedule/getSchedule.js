import getFilteredSchedule from "./getFilteredSchedule";

export default function getSchedule(
  scheduleData,
  cinemasListData,
  wilayaFilter,
  roomId
) {
  if (roomId) {
    const schedule = scheduleData.schedule.filter(
      (cinema) => cinema.cinemaId == roomId
    );
    return schedule;
  }
  const schedule =
    wilayaFilter.value == "tous"
      ? scheduleData.schedule
      : getFilteredSchedule(scheduleData, cinemasListData, wilayaFilter);

  return schedule;
}
