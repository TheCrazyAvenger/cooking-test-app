import { Button } from '@mui/material';
import React from 'react';

export const HomeButton = () => {
  const handleHome = () => {
    window.location.replace('/');
  };

  return (
    <Button
      size='large'
      style={{ width: '100%' }}
      variant='contained'
      onClick={handleHome}
    >
      На главную страницу
    </Button>
  );
};
