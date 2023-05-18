export const convertWord = (word: string) => {
  const newWord = word.split('(')[0].trim();

  return newWord;
};
