import { Button, Card, CardContent, Typography } from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Pathes } from '../../contants/routes';

export const CommonTest = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToWordTest = () => {
    navigate(Pathes.wordTest);
  };
  const handleGoToWordDescriptionTest = () => {
    navigate(Pathes.descriptionTest);
  };
  const handleGoToCopmleteWordTest = () => {
    navigate(Pathes.completeWordTest);
  };
  const handleGoToOddTest = () => {
    navigate(Pathes.oddTest);
  };
  const handleGoToCorrectSentencesTest = () => {
    navigate(Pathes.correctSentences);
  };

  return (
    <div className='common-test'>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            className='button'
          >
            Выберите тест
          </Typography>
          <Button
            size='large'
            variant='contained'
            className='button'
            onClick={handleGoToWordTest}
          >
            Тренировка на перевод
          </Button>
          <Button
            size='large'
            variant='contained'
            className='button'
            onClick={handleGoToWordDescriptionTest}
          >
            Проверка значения
          </Button>
          <Button
            size='large'
            variant='contained'
            className='button'
            onClick={handleGoToCopmleteWordTest}
          >
            Проверка правописания
          </Button>
          <Button
            size='large'
            variant='contained'
            className='button'
            onClick={handleGoToOddTest}
          >
            Лишнее слово
          </Button>
          <Button
            size='large'
            variant='contained'
            className='button'
            onClick={handleGoToCorrectSentencesTest}
          >
            Составить предложения
          </Button>
          <Button
            size='large'
            variant='outlined'
            className='button last'
            onClick={handleGoBack}
          >
            Назад
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
