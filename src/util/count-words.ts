const segmenter = new Intl.Segmenter("en-US", { granularity: "word" });

export const countWords = (text: string): number => {
  let count = 0;

  for (const { isWordLike } of segmenter.segment(text)) {
    if (isWordLike) count++;
  }

  return count;
};
