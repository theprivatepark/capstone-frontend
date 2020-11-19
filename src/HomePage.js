import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Photo1 from './assets/images/photo1.jpg'
import Photo2 from './assets/images/photo2.jpg'
import Photo3 from './assets/images/photo3.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item lg={4}>
          <Paper className={classes.paper}>
            <img src={Photo1} />
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Paper className={classes.paper}>
            <img src={Photo2} />
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Paper className={classes.paper}>
            <img src={Photo3} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
