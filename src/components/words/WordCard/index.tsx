import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { WordModal } from '../WordModal';

export const WordCard = ({ item }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <WordModal word={item} open={open} handleClose={handleClose} />
      <Card sx={{ width: '30%', marginBottom: 4 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {item.word}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {item.translation}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={handleOpen}>
            Подробнее
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
