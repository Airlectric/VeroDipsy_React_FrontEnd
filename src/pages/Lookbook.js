import React from 'react';
import LookbookCarousel from '../components/LookbookCarousel';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  heading: {
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
}));

const Lookbook = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.heading} gutterBottom>
        Lookbook
      </Typography>
      <LookbookCarousel />
    </div>
  );
}

export default Lookbook;
