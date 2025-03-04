const segmenter = new Intl.Segmenter("en-US", { granularity: "word" });

export const countWords = (text: string): number => {
  let count = 0;

  for (const segmentData of segmenter.segment(text))
    if (segmentData.isWordLike) count++;

  return count;
};
