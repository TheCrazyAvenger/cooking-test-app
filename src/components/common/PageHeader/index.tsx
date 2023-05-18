import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
};

export const PageHeader = ({ title }: Props) => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <Typography variant='h6' color='inherit' component='div'>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
