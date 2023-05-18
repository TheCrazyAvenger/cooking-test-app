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

  const words = useMemo(() => shuffle(allWords), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [variants, setVariants] = useState([]);
  const [score, setScore] = useState<boolean[]>([]);

  useEffect(() => {
    const newVariants = getNewvariantsts(words, currentIndex);

    setVariants(newVariants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleAnswer = (answer: string) => {
    const nextIndex = currentIndex + 1;
    const currentWord = words[currentIndex].word;
    const result = answer === currentWord ? true : false;

    const newScore = [...score, result];

    setScore(newScore);

    if (nextIndex === words.length) {
      const rightAnswers = newScore.filter((item) => item).length;
      const resultMessage = `Вы ответили правильно на ${rightAnswers} из ${words.length}`;

      navigate(Pathes.results, { state: { resultMessage } });
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div className='image_test'>
      <Card sx={{ width: '50%' }}>
        <CardMedia
          sx={{ height: 300 }}
          image='https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Что изображено на картинке?
          </Typography>
          <div className='variants'>
            {variants.map((item, i) => (
              <Button
                key={i}
                variant='outlined'
                style={{ width: '100%', marginBottom: 20 }}
                onClick={() => handleAnswer(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
