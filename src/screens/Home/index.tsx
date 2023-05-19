import { Button } from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Pathes } from '../../contants/routes';

export const Home = () => {
  const navigate = useNavigate();

  const handleGoToWords = () => {
    navigate(Pathes.words);
  };
  const handleGoToImageTest = () => {
    navigate(Pathes.imageTest);
  };
  const handleGoToCommonTest = () => {
    navigate(Pathes.commonTest);
  };

  return (
    <div className='home'>
      <div className='home__content'>
        <h1>
          Кулинарный Словарь: Приложение для Овладения Лексикой в Кулинарии
        </h1>
        <p>
          Увлекательное и познавательное приложение, специально разработанное
          для тех, кто хочет расширить свой кулинарный словарный запас. Откройте
          для себя мир кулинарии и изучайте новые слова и выражения, связанные с
          готовкой, рецептами и пищевыми ингредиентами.
        </p>
        <div className='home__buttons'>
          <Button
            variant='outlined'
            className='home__button'
            onClick={handleGoToWords}
          >
            Список слов
          </Button>
          <Button
            variant='contained'
            className='home__button'
            onClick={handleGoToCommonTest}
          >
            Стандартный Тест
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className='home__button'
            onClick={handleGoToImageTest}
          >
            Тест по картинкам
          </Button>
        </div>
      </div>
      <img
        className='home__image'
        src={require('../../assets/images/home-image.png')}
        alt='img'
      />
    </div>
  );
};
