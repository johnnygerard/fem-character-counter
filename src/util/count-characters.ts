export const countCharacters = (text: string, withSpaces = true): number => {
  let count = 0;

  if (withSpaces) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of text) count++;
  } else {
    for (const char of text) if (char !== " ") count++;
  }

  return count;
};
