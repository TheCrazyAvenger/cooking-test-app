import { useEffect, useMemo, useState } from 'react';

import { Button, Card, CardContent, Typography } from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { allWords } from '../../../contants/words';
import { Pathes } from '../../../contants/routes';
import { shuffle } from '../../../utils/shuffle';
import { getNewvariantsts } from '../../../utils/getNewvariants';

export const WordDescriptionTest = () => {
  const navigate = useNavigate();

  const words = useMemo(() => shuffle(allWords), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [variants, setVariants] = useState([]);
  const [score, setScore] = useState<boolean[]>([]);
  const [clickedWord, setClickedWord] = useState<null | string>(null);

  useEffect(() => {
    const newVariants = getNewvariantsts(words, currentIndex);

    setVariants(newVariants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleAnswer = (answer: string) => {
    const nextIndex = currentIndex + 1;
    const currentWord = words[currentIndex].word;
    const result = answer === currentWord ? true : false;

    setClickedWord(answer);

    setTimeout(() => {
      const newScore = [...score, result];

      setScore(newScore);

      if (nextIndex === words.length) {
        const rightAnswers = newScore.filter((item) => item).length;
        const resultMessage = `Вы ответили правильно на ${rightAnswers} из ${words.length}`;

        navigate(Pathes.results, { state: { resultMessage } });
      } else {
        setCurrentIndex(nextIndex);
      }
      setClickedWord(null);
    }, 2000);
  };

  return (
    <div className='image_test'>
      <Card sx={{ width: '50%' }}>
        <CardContent>
          <Typography variant='h2'>{words[currentIndex].definition}</Typography>

          <Typography gutterBottom variant='h5' component='div'>
            Какой слово подходит описанию?
          </Typography>
          <div className='variants'>
            {variants.map((item, i) => {
              const backgroundColor = clickedWord
                ? item === words[currentIndex].word
                  ? 'green'
                  : item === clickedWord
                  ? 'red'
                  : 'white'
                : 'white';
              const color = backgroundColor !== 'white' ? 'white' : 'black';

              return (
                <Button
                  key={i}
                  disabled={!!clickedWord}
                  variant='outlined'
                  style={{
                    width: '100%',
                    marginBottom: 20,
                    backgroundColor,
                    color,
                  }}
                  onClick={() => handleAnswer(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
