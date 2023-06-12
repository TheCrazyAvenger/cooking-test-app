import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Pathes } from '../../../contants/routes';
import { correctSentences } from '../../../contants/correctSentences';

export const CorrectSentencesTest = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState<any>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState<boolean[]>([]);
  const [value, setValue] = useState('');
  const [clickedWord, setClickedWord] = useState<null | boolean>(null);

  const handleAnswer = () => {
    const nextIndex = currentIndex + 1;
    const currentWord = correctSentences[currentIndex].answer;
    const result =
      value.toLocaleLowerCase().trim() ===
      currentWord.toLocaleLowerCase().trim()
        ? true
        : false;

    const resObj = {
      word: correctSentences[currentIndex].words,
      answer: value,
      rightAnswer: currentWord,
      color: result ? 'green' : 'red',
    };
    const newResults = [...results, resObj];

    setResults(newResults);

    setClickedWord(result);

    setTimeout(() => {
      const newScore = [...score, result];

      setScore(newScore);

      if (nextIndex === correctSentences.length) {
        const rightAnswers = newScore.filter((item) => item).length;
        const resultMessage = `Вы ответили правильно на ${rightAnswers} из ${correctSentences.length}`;

        navigate(Pathes.results, {
          state: { resultMessage, result: newResults },
        });
      } else {
        setCurrentIndex(nextIndex);
        setValue('');
      }
      setClickedWord(null);
    }, 2000);
  };

  return (
    <div className='image_test'>
      <Card sx={{ width: '50%' }}>
        <CardContent>
          <Typography variant='h4'>
            {correctSentences[currentIndex].words}
          </Typography>

          <Typography gutterBottom variant='h5' component='div'>
            Cоставьте предложения
          </Typography>
          <div className='variants'>
            <TextField
              autoComplete='off'
              style={{
                backgroundColor:
                  typeof clickedWord === 'boolean'
                    ? clickedWord
                      ? 'green'
                      : 'red'
                    : 'white',
                color: typeof clickedWord === 'boolean' ? 'white' : 'black',
              }}
              id='outlined-basic'
              label='Слово'
              variant='outlined'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <Button
            disabled={typeof clickedWord === 'boolean'}
            style={{ marginTop: 10 }}
            variant='contained'
            onClick={handleAnswer}
          >
            Отправить
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
