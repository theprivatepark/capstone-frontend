import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, CssBaseline } from '@material-ui/core';
import Photo4 from './assets/logo.png';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 100
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: 70,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  imagePaper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  pic: {
    marginTop: 80
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.imagePaper}>
            <img src={Photo4} className={classes.pic}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>

          <Grid container alignItems="flex-start" spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="firstName"
                type="text"
                label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="lastName"
                type="text"
                label="Last Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="email"
                type="text"
                label="Email" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="lastName"
                type="text"
                label="Phone Number" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="notes"
                multiline
                label="Message" />
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>



          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
