import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Photo1 from './assets/profilepic.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    paddingTop: 60,
    textAlign: 'center',
    height: 450,
    color: theme.palette.text.secondary,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={Photo1} className={classes.paper} alt=""></img>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>BLAHHHH. THIS IS WHERE MY BIO WILL GO. HELLO EVERYONE. BLAHHHH. THIS IS WHERE MY BIO WILL GO. HELLO EVERYONE.BLAHHHH. THIS IS WHERE MY BIO WILL GO. HELLO EVERYONE.BLAHHHH. THIS IS WHERE MY BIO WILL GO. HELLO EVERYONE.BLAHHHH. THIS IS WHERE MY BIO WILL GO. HELLO EVERYONE.BLAHHHH. THIS IS WHERE MY BIO WILL GO. HELLO EVERYONE.BLAHHHH. THIS IS WHERE MY BIO WILL GO. HELLO EVERYONE.</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
