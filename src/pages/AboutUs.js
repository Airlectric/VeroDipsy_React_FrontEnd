import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAboutUsContent } from '../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const [content, setContent] = useState(null);

  useEffect(() => {
    getAboutUsContent().then(response => setContent(response.data[0]));
  }, []);

  if (!content) return null;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>{content.title}</Typography>
            <Typography variant="body1">{content.content}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.root}>
            <img
              src={content.image}
              alt={content.title}
              className={classes.image}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
