import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Stepper from './Stepper';
import { Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    minWidth: '200px',
    marginLeft: '150px',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: 700,
    height: 850,
  },
  imageContainer: {
    width: '500px',
    height: 'auto',
    marginLeft: '7rem',
    marginTop: '2rem',

  }
}));


export default function ClientPhotos(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Stepper /> */}
        <Card className={classes.card}>
        <img src={`http://localhost:3001` + props.gallery.image} alt="client photos" className={classes.imageContainer}/>
        </Card>
    
    </div>
  );
}