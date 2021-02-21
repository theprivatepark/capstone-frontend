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
    marginTop: 90,
    width: 500
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <img src={Photo4} className={classes.pic} alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <form action="https://formspree.io/f/xbjpabyk" method="POST">
              <Grid container alignItems="flex-start" spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    name="First Name"
                    type="text"
                    label="First Name"
                    id="firstName" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    name="Last Name"
                    type="text"
                    label="Last Name"
                    id="lastName" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    name="Email"
                    type="text"
                    label="Email"
                    id="email" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    name="Phone Number"
                    type="text"
                    label="Phone Number"
                    id="phoneNumber" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="Message"
                    multiline
                    label="Message"
                    id="message" />
                </Grid>
                <Grid item style={{ marginTop: 16 }} xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit">

                    Submit
              </Button>
                </Grid>
              </Grid>

            </form>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
