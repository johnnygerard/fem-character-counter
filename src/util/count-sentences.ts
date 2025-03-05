const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });

const BLANK_LINE = /^\s*$/;

export const countSentences = (text: string): number => {
  let count = 0;

  for (const { segment } of segmenter.segment(text)) {
    if (segment.match(BLANK_LINE)) continue;
    count++;
  }

  return count;
};
