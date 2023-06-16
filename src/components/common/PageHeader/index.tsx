import { AppBar, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
};

export const PageHeader = ({ title }: Props) => {
  const handleHome = () => {
    window.location.replace('/');
  };

  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <IconButton
          onClick={handleHome}
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <Typography>Вернуться назад</Typography>
        </IconButton>
        <Typography variant='h6' color='inherit' component='div'>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
