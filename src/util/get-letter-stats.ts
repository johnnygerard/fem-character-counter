import type { LetterStats } from "@/type/letter-stats";

const getLetterCounts = (
  text: string,
): {
  counts: Map<string, number>;
  total: number;
} => {
  const counts = new Map<string, number>();
  let total = 0;

  for (const char of text) {
    const isLetter = /[a-z]/i.test(char);
    if (!isLetter) continue;

    const key = char.toLocaleUpperCase();
    counts.set(key, (counts.get(key) ?? 0) + 1);
    total++;
  }

  return { counts, total };
};

/**
 * Get letter statistics from text.
 * @param text - The text to analyze.
 * @returns The letter statistics sorted by count in descending order.
 */
export const getLetterStats = (text: string): LetterStats[] => {
  const { counts, total } = getLetterCounts(text);
  const stats: LetterStats[] = [];

  for (const [letter, count] of counts) {
    const percentage = (count / total) * 100;
    stats.push({ letter, count, percentage });
  }

  return stats.sort((a, b) => b.count - a.count);
};
