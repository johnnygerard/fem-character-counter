/**
 * Average reading speed in words per minute (non-fiction English silent reading)
 * @see https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786
 */
const WPM_ENGLISH = 238;

export const getReadingTime = (wordCount: number): string => {
  if (wordCount === 0) return "0 minutes";

  const minutes = wordCount / WPM_ENGLISH;
  if (minutes < 1) return "<1 minute";

  const roundedMinutes = Math.round(minutes);
  if (roundedMinutes === 1) return "1 minute";
  return `${roundedMinutes} minutes`;
};
