import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Photo1 from './assets/gallery1.jpg'; 
import Photo2 from './assets/gallery2.jpg';
import Photo3 from './assets/gallery3.jpg'; 
import Photo4 from './assets/gallery4.jpg'; 
import Photo5 from './assets/gallery5.jpg'; 
import Photo6 from './assets/gallery6.jpg'; 
import Photo7 from './assets/gallery7.jpg'; 
import Photo8 from './assets/gallery8.jpg'; 
import Photo9 from './assets/gallery9.jpg'; 

import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(4),
  },
  card: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '150%', // 16:9
  },

}));

const cards = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9];

export default function Gallery() {
  const classes = useStyles();

  return (
    <React.Fragment>
         <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Paper className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}