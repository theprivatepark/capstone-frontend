import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Photo1 from './assets/photo1.jpg';
import Photo2 from './assets/photo2.jpg';
import Photo3 from './assets/photo3.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  imageContainer: {
    height: '80vh',
    width: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary


  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const imgArray = [Photo1, Photo2, Photo3]

  return (
    <div className={classes.root}>

      <Grid container spacing={1} className={classes.root}>
        <CssBaseline />
        {imgArray.map((image, index) => (
          <Grid item key={index} lg={4} className={classes.root}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.imageContainer}
                  title="Contemplative Reptile"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </CardActionArea>

            </Card>

          </Grid>
        ))}
      </Grid>
    </div>
  );
}