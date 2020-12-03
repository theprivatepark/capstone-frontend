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
import ClientPhotos from './ClientPhotos';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    width: '100%',
    minWidth: '200px',
    marginLeft: '350px',
    paddingTop: theme.spacing(2),
    //   // paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    width: '18rem',
    display: 'flex',
    flexDirection: 'column',
    // minWidth: '200px',
    // marginLeft: '70px',
  },
  cardMedia: {
    paddingTop: '76.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function Gallery() {
  const classes = useStyles();
  const [events, setEvents] = useState([])
  const [view, setView] = useState(false)
  const [event, setEditEvent] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [gallery, setGallery] = useState(null)
  // const history = useHistory()

  const getEvents = async () => {
    try {
      const allEvents = await
        axios.get("http://localhost:3001/events")
      let parsedList = allEvents.data.map(event =>
        JSON.parse(event)
      )
      console.log(parsedList)
      setEvents(parsedList); //set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEvents()
  }, []);

  const handleDelete = (e, id) => {

    return fetch(`http://localhost:3001/events/${id}`, {
      method: "DELETE"
    })
    .then(response => {response.json()})
    .then(setTimeout(function(){window.location.reload();},10))
  }

  const handleEdit = (e, event) => {
    setEditEvent(event)
    setView(!view);
  }

  const handleOpen = (e, event) => {
    setOpen(true);
    setGallery(event)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      {!view ? <main>
        <div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {events.sort((a, b) => a.event.id - b.event.id).map(({ event }) => (
                <Grid item key={event} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`http://localhost:3001${event.image}`}
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
                      <Button size="small" color="primary" onClick={(e) => {handleOpen(e, event)}}>
                        View Gallery
                    </Button>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open}>
                          <div className={classes.paper}>
                            <h2 id="transition-modal-title" style={{textAlign: 'center'}}>{event.event_name}</h2>
                            <p id="transition-modal-description"><ClientPhotos gallery={gallery} /></p>
                          </div>
                        </Fade>
                      </Modal>
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
        </div>
      </main>
        :
        <EditSession event={event} />
      }

    </React.Fragment>
  );
}