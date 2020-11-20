import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Photo1 from './assets/gallery1.jpg'; 
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(8),
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Gallery() {
  const classes = useStyles();

  return (
    <React.Fragment>
         <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Paper className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Photo1}
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