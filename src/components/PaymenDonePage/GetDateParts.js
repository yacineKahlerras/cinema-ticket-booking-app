export default function GetDateParts() {
  const monthsList = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  const daysOfWeek = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  const dateObject = new Date();
  const hour = dateObject.getHours();
  const month = monthsList[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  const day = dateObject.getDay() + 1;
  const dayOfWeek = daysOfWeek[dateObject.getDay()];

  return {
    month: month,
    hour: hour,
    year: year,
    day: day,
    dayOfWeek: dayOfWeek,
  };
}
