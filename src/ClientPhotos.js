import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 650,
  },
}));


export default function ClientPhotos(props) {
  const classes = useStyles();
  // console.log(props.event)

  return (
    <div className={classes.root}>
          {/* <image src={'http://localhost:3001' + props.event.image} /> */}
hello
    </div>
  );
}