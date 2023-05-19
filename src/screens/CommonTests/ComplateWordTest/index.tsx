import { useMemo, useState } from 'react';

import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { allWords } from '../../../contants/words';
import { Pathes } from '../../../contants/routes';
import { shuffle } from '../../../utils/shuffle';
import { convertWord } from '../../../utils/convertWord';

export const CompleteWordTest = () => {
  const navigate = useNavigate();

  const words = useMemo(
    () => shuffle(allWords.filter((item) => item.decription)),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState<boolean[]>([]);
  const [value, setValue] = useState('');
  const [clickedWord, setClickedWord] = useState<null | boolean>(null);

  const handleAnswer = () => {
    const nextIndex = currentIndex + 1;
    const currentWord = words[currentIndex].word.split('(')[0];
    const result =
      value.toLocaleLowerCase().trim() ===
      currentWord.toLocaleLowerCase().trim()
        ? true
        : false;

    setClickedWord(result);

    setTimeout(() => {
      const newScore = [...score, result];

      setScore(newScore);

      if (nextIndex === words.length) {
        const rightAnswers = newScore.filter((item) => item).length;
        const resultMessage = `Вы ответили правильно на ${rightAnswers} из ${words.length}`;

        navigate(Pathes.results, { state: { resultMessage } });
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
          <Typography variant='h3'>
            {words[currentIndex].decription}{' '}
            {convertWord(words[currentIndex].word)}
          </Typography>

          <Typography gutterBottom variant='h5' component='div'>
            Допишите слово
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
