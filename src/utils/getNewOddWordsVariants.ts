import { shuffle } from './shuffle';

export const getNewWordTestariants = (words: any, currentIndex: number) => {
  const newWords = shuffle(words[currentIndex].words);

  return newWords;
};
