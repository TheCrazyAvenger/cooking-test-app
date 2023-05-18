import { shuffle } from './shuffle';

export const getNewWordTestariantsts = (words: any, currentIndex: number) => {
  const currentWord = words[currentIndex].word;
  const newWords = shuffle(
    words.filter((item: any) => item.word !== currentWord)
  )
    .slice(0, 3)
    .map((item: any) => item.translation);
  const newVariants = shuffle([words[currentIndex].translation, ...newWords]);
  return newVariants;
};
