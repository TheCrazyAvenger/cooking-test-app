import { Box, Modal, Typography } from '@mui/material';
import './styles.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  marginTop: 5,
  marginBottom: 5,
  p: 4,
};

export const WordModal = ({ word, open, handleClose }: any) => {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby='keep-mounted-modal-title'
      aria-describedby='keep-mounted-modal-description'
      className='modal'
    >
      <Box sx={style}>
        <img
          src='https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
          alt='img'
          className='image'
        />
        <div className='modal__header'>
          <div>
            <Typography variant='subtitle1'>Слово</Typography>
            <Typography
              id='keep-mounted-modal-title'
              variant='h6'
              component='h2'
              mr={5}
              mb={3}
            >
              {word.word}
            </Typography>
          </div>
          <div>
            <Typography variant='subtitle1'>Перевод</Typography>
            <Typography
              id='keep-mounted-modal-title'
              variant='h6'
              component='h2'
              mb={3}
            >
              {word.translation}
            </Typography>
          </div>
        </div>
        <Typography variant='subtitle1'>Определение</Typography>
        <Typography
          id='keep-mounted-modal-title'
          variant='h6'
          component='h2'
          mb={3}
        >
          {word.definition}
        </Typography>
        <Typography variant='subtitle1'>Пример</Typography>
        <Typography id='keep-mounted-modal-title' variant='h6' component='h2'>
          {word.example}
        </Typography>
      </Box>
    </Modal>
  );
};
