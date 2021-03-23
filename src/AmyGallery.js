import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Photos1 from './assets/amy1.jpg';
import Photos2 from './assets/amy2.jpg';
import Photos3 from './assets/amy3.jpg';
import Photos4 from './assets/amy4.jpg';
import Stepper from './Stepper';

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


export default function ImageGridList() {
  const classes = useStyles();
  const tileData = [Photos1, Photos2, Photos3, Photos4];

  return (
    <div className={classes.root}>
      <Stepper/>
      <GridList cellHeight={360} className={classes.gridList} cols={2}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile} alt=""/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}