/**loops through all the movie schedule to find thecorrect date for it */
export default function GetDateData(movieSchedule, cinemaId, language) {
  for (
    let cinemaIdx = 0;
    cinemaIdx < movieSchedule.schedule.length;
    cinemaIdx++
  ) {
    const cinemaData = movieSchedule.schedule[cinemaIdx];
    if (cinemaData.cinemaId == cinemaId) {
      for (let dateIdx = 0; dateIdx < cinemaData.dates.length; dateIdx++) {
        const dateData = cinemaData.dates[dateIdx];
        if (dateData.language == language) return dateData;
      }
    }
  }
}
