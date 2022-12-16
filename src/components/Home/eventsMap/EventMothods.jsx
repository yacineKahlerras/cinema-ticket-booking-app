/** takes the string and slices it into parts and retuns an object
 * { weekday: weekday, day: day, month: month }
 */
export function DateDecontructor(originalText) {
  let weekday = originalText.slice(0, 3);
  const day = originalText.slice(4, 6);
  const month = originalText.slice(7, 9);

  const daysOfWeek = [
    { label: "dim", value: "dimanche" },
    { label: "lun", value: "lundi" },
    { label: "mar", value: "mardi" },
    { label: "mer", value: "mercredi" },
    { label: "jeu", value: "jeudi" },
    { label: "ven", value: "vendredi" },
    { label: "sam", value: "samedi" },
  ];

  for (let i = 0; i < daysOfWeek.length; i++) {
    if (weekday == daysOfWeek[i].label) weekday = daysOfWeek[i].value;
  }

  return { weekday: weekday, day: day, month: month };
}

/** takes the language code like vf,eng..ect
 * and returns a string of what it means vf=french
 */
export function LanguageDecontructor(langue) {
  switch (langue) {
    case "eng":
      return "anglais";
    case "vf":
      return "francais";
    case "vostfr":
      return "anglais sous-titré";

    default:
      return "anglais";
  }
}
