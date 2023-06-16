import { useEffect, useMemo, useState } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Pathes } from '../../../contants/routes';
import { shuffle } from '../../../utils/shuffle';
import { oddWords } from '../../../contants/oddWords';
import { getNewWordTestariants } from '../../../utils/getNewOddWordsVariants';
import { HomeButton } from '../../../components/common/HomeButton';

export const OddTest = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [variants, setVariants] = useState([]);
  const [score, setScore] = useState<boolean[]>([]);
  const [clickedWord, setClickedWord] = useState<null | string>(null);

  useEffect(() => {
    const newVariants = getNewWordTestariants(oddWords, currentIndex);

    setVariants(newVariants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleAnswer = (answer: string) => {
    const nextIndex = currentIndex + 1;
    const currentWord = oddWords[currentIndex].wrong;
    const result = answer === currentWord ? true : false;

    setClickedWord(answer);

    setTimeout(() => {
      const newScore = [...score, result];

      const resObj = {
        word: shuffle(oddWords[currentIndex].words).join(', '),
        answer,
        rightAnswer: currentWord,
        color: result ? 'green' : 'red',
      };
      const newResults = [...results, resObj];

      setResults(newResults);

      setScore(newScore);

      if (nextIndex === oddWords.length) {
        const rightAnswers = newScore.filter((item) => item).length;
        const resultMessage = `Вы ответили правильно на ${rightAnswers} из ${oddWords.length}`;

        navigate(Pathes.results, {
          state: { resultMessage, result: newResults },
        });
      } else {
        setCurrentIndex(nextIndex);
      }
      setClickedWord(null);
    }, 2000);
  };

  const title = useMemo(
    () => shuffle(oddWords[currentIndex].words).join(', '),
    [currentIndex]
  );

  return (
    <div className='image_test'>
      <Card sx={{ width: '50%' }}>
        <CardContent>
          <Typography variant='h4'>{title}</Typography>

          <Typography gutterBottom variant='h5' component='div'>
            Что из этого лишнее?
          </Typography>
          <div className='variants'>
            {variants.map((item, i) => {
              const backgroundColor = clickedWord
                ? item === oddWords[currentIndex].wrong
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
        <CardActions>
          <HomeButton />
        </CardActions>
      </Card>
    </div>
  );
};
