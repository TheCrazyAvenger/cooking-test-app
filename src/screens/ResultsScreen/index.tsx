import { useLocation } from 'react-router-dom';
import './styles.css';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export const ResultsScreen = () => {
  const { state }: any = useLocation();

  const handleHome = () => {
    window.location.replace('/');
  };

  const RenderAnswers = () => {
    if (state.result) {
      return state.result.map((item: any, index: number) => (
        <Card
          style={{ backgroundColor: item.color, marginBottom: 20 }}
          key={index.toString()}
        >
          <CardContent>
            <Typography color={'white'}>{item.word}</Typography>
            <Typography color={'white'}>
              Правильный ответ: {item.rightAnswer}
            </Typography>
            <Typography color={'white'}>Ваш ответ: {item.answer}</Typography>
          </CardContent>
        </Card>
      ));
    } else {
      return <></>;
    }
  };

  return (
    <div className='results'>
      <Card sx={{ width: '70%' }}>
        <CardContent>
          <Typography gutterBottom variant='h2' component='div'>
            Ваш результат
          </Typography>
          <Typography variant='h5' color='text.secondary'>
            {state.resultMessage}
          </Typography>
          <RenderAnswers />
        </CardContent>
        <CardActions>
          <Button
            size='large'
            style={{ width: '100%' }}
            variant='contained'
            onClick={handleHome}
          >
            На главную страницу
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
