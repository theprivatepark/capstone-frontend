import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Photo from './assets/AboutMe.png';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: 60,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  image: {
    height: '80vh'
  }
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={Photo} alt=""className={classes.image}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
