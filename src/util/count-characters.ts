export const countCharacters = (
  text: string,
  isSpaceExcluded = false,
): number => {
  let count = 0;

  if (isSpaceExcluded) {
    for (const char of text) {
      if (/\s/.test(char)) continue;
      count++;
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of text) count++;
  }

  return count;
};
