const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });

const WHITESPACE = /\s/;

export const countCharacters = (
  text: string,
  isSpaceExcluded = false,
): number => {
  const segments = segmenter.segment(text);
  let count = 0;

  if (isSpaceExcluded) {
    for (const { segment } of segments) {
      if (WHITESPACE.test(segment)) continue;
      count++;
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of segments) count++;
  }

  return count;
};
