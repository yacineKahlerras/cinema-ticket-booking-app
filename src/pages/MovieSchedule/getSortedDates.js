/**gets a list of schedule dates and gets them into a set
 * as not to get duplicate values and then sorts them into
 * an array by the most recent date
 */
export function getSortedDates(schedule) {
  const movieDates = new Set();

  for (let cinemaIdx = 0; cinemaIdx < schedule.length; cinemaIdx++) {
    const cinemaSchedule = schedule[cinemaIdx];
    for (let dateIdx = 0; dateIdx < cinemaSchedule.dates.length; dateIdx++) {
      const dateProgram = cinemaSchedule.dates[dateIdx];
      const seconds = dateProgram.date.seconds;
      movieDates.add(new Date(seconds * 1000).setHours(0, 0, 0, 0));
    }
  }

  return Array.from(movieDates).sort();
}
