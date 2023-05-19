import { useEffect, useMemo, useState } from 'react';
import { allWords } from '../../contants/words';
import { shuffle } from '../../utils/shuffle';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import './styles.css';
import { getNewvariantsts } from '../../utils/getNewvariants';
import { useNavigate } from 'react-router-dom';
import { Pathes } from '../../contants/routes';

export const ImageTest = () => {
  const navigate = useNavigate();

  const words = useMemo(() => shuffle(allWords.filter((word) => word.img)), []);
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
        <CardMedia
          sx={{ height: 350, objectFit: 'contain' }}
          image={words[currentIndex].img}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Что изображено на картинке?
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
