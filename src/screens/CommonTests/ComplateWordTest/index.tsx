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
    () =>
      shuffle(
        allWords.filter(
          (item) => convertWord(item.word).split(' ').length === 1
        )
      ),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState<boolean[]>([]);
  const [value, setValue] = useState('');

  const handleAnswer = () => {
    const nextIndex = currentIndex + 1;
    const currentWord = convertWord(words[currentIndex].word);
    const result =
      value.toLocaleLowerCase().trim() ===
      currentWord.toLocaleLowerCase().trim()
        ? true
        : false;

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
  };

  return (
    <div className='image_test'>
      <Card sx={{ width: '50%' }}>
        <CardContent>
          <Typography variant='h2'>
            {convertWord(words[currentIndex].word).slice(0, 2)}...
          </Typography>
          <Typography variant='h4'>{words[currentIndex].definition}</Typography>

          <Typography gutterBottom variant='h5' component='div'>
            Допишите слово
          </Typography>
          <div className='variants'>
            <TextField
              id='outlined-basic'
              label='Слово'
              variant='outlined'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <Button
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
