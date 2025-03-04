const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });

const BLANK_LINE = /^\s*$/;

export const countSentences = (text: string): number => {
  let count = 0;

  for (const segmentData of segmenter.segment(text)) {
    if (segmentData.segment.match(BLANK_LINE)) continue;
    count++;
  }

  return count;
};
