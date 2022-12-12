/** takes the string and slices it into parts and retuns an object
 * { weekday: weekday, day: day, month: month }
 */
export function DateDecontructor(originalText) {
  const weekday = originalText.slice(0, 3);
  const day = originalText.slice(4, 6);
  const month = originalText.slice(7, 9);

  return { weekday: weekday, day: day, month: month };
}

/** takes the language code like vf,eng..ect
 * and returns a string of what it means vf=french
 */
export function LanguageDecontructor(langue) {
  switch (langue) {
    case "eng":
      return "english";
    case "vf":
      return "french";
    case "vostfr":
      return "english with french subs";

    default:
      return "english";
  }
}
