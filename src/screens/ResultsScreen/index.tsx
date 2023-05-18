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
        </CardContent>
        <CardActions>
          <Button size='large' variant='contained' onClick={handleHome}>
            На главную страницу
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
