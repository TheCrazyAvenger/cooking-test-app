export const convertWord = (word: string) => {
  const newWord = word
    .split('(')[0]
    .trim()
    .split('')
    .map((letter, i) => (i === 0 ? letter : '_'))
    .join(' ');

  return newWord;
};
