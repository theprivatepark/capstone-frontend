import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from './Stepper';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    minWidth: '200px',
    marginLeft: '350px',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: 700,
    height: 650,
  },
  imageContainer: {
    width: '20rem',
    marginLeft: '13rem',
    marginTop: '5rem'

  }
}));


export default function ClientPhotos(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper />
      <Grid>
        <Card className={classes.card}>
        <img src={`http://localhost:3001` + props.gallery.image} alt="" className={classes.imageContainer}/>
        </Card>
      </Grid>
    </div>
  );
}