const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });

export const countCharacters = (
  text: string,
  excludeSpaces: boolean,
): number => {
  const segments = segmenter.segment(text);
  let count = 0;

  if (excludeSpaces) {
    for (const { segment } of segments) if (segment !== " ") count++;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of segments) count++;
  }

  return count;
};
