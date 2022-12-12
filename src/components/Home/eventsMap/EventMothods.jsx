export function DateDecontructor(originalText) {
  const weekday = originalText.slice(0, 3);
  const day = originalText.slice(4, 6);
  const month = originalText.slice(7, 9);

  return { weekday: weekday, day: day, month: month };
}
