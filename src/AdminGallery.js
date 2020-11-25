import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import EditSession from './EditSession';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export default function Gallery() {
  const classes = useStyles();
  const [events, setEvents] = useState([])
  const [view, setView] = useState(false)
  const [event, setEditEvent] = useState(false)

  const getEvents = async () => {
    try {
      const allEvents = await
        axios.get("http://localhost:3001/events")
      setEvents(allEvents.data); //set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEvents()
  }, []);

  const handleDelete = (e, id) => {
    console.log(e)
    console.log(id)

    return fetch(`http://localhost:3001/events/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(console.log)
  }

  const handleEdit = (e, event) => {
    console.log(e)
    console.log(event)
    setEditEvent(event)
    setView(!view);
  }


  return (
    <React.Fragment>
      <CssBaseline />
      {!view ? <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item key={event} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" align="center" component="h2">
                      {event.event_name}
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                      Date: {event.date}
                      <br></br>
                      Status: {event.status}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Add Photos
                    </Button>
                    <Button size="small" color="primary" onClick={(e) => { handleEdit(e, event) }}>
                      Edit
                    </Button>
                    <Button size="small" color="primary" onClick={(e) => { handleDelete(e, event.id) }}>
                      Delete Album
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      : 
      <EditSession event={event}/>
      }
      

    </React.Fragment>
  );
}