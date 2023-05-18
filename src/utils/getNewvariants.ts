import { shuffle } from './shuffle';

export const getNewvariantsts = (words: any, currentIndex: number) => {
  const currentWord = words[currentIndex].word;
  const newWords = shuffle(
    words.filter((item: any) => item.word !== currentWord)
  )
    .slice(0, 3)
    .map((item: any) => item.word);
  const newVariants = shuffle([words[currentIndex].word, ...newWords]);
  return newVariants;
};
