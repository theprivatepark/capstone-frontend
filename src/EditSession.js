import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {  useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '45ch',
    },
    marginLeft: '40rem',
    marginTop: '5rem'
  },
  
}));

export default function EditSession(props) {
  const classes = useStyles();
  const status = ["consultation", "photo session", "editing", "complete"]
  const [eventStatus, setStatusPick] = useState(props.event.status)
  const [eventNameChange, setEventNameChange] = useState(props.event.event_name)
  const [eventLocationName, setLocationNameChange] = useState(props.event.location_name)
  const [eventLocationAddress, setLocationAddressChange] = useState(props.event.location_address)
  const [eventDate, setEventDateChange] = useState(props.event.date)
  const [eventTime, setEventTimeChange] = useState(props.event.time)
  const eventId = props.event.id
  const [client, setClient] = useState([])
  const history = useHistory()

  const handleStatusChange = (event) => {
    setStatusPick(event.target.value);
  }
  const handleEventNameChange = (event) => {
    setEventNameChange(event.target.value)
  }
  const handleLocationNameChange = (event) => {
    setLocationNameChange(event.target.value)
  }
  const handleLocationAddressChange = (event) => {
    setLocationAddressChange(event.target.value)
  }
  const handleEventDateChange = (event) => {
    setEventDateChange(event.target.value)
  }
  const handleEventTimeChange = (event) => {
    setEventTimeChange(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    let event = {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_id: eventId,
        event_name: eventNameChange,
        location_name: eventLocationName,
        location_address: eventLocationAddress,
        date: eventDate,
        time: eventTime,
        status: eventStatus
      })
    }
    fetch(`http://localhost:3001/events/${eventId}`, event)
      .then(response => response.json())
      .then(history.go(0)
      )
  }

  const getClient = async () => {
    try {
      const client = await
        axios.get(`http://localhost:3001/clients/${props.event.client_id}`)
      setClient(client.data); //set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClient()
  } , []);


  return (
    <form className={classes.root} noValidate onSubmit={(e) => { handleSubmit(e) }}>
      <div>
        <TextField
          id="standard-helperText"
          label="Client"
          value={client.first_name + " " + client.last_name}
        />
        <br></br>
        <TextField
          id="standard-helperText"
          label="Event Name"
          defaultValue={props.event.event_name}
          onChange={handleEventNameChange}
        />
        <br></br>
        <TextField
          id="standard-select-currency"
          select
          label="Status"
          defaultValue={props.event.status}
          onChange={handleStatusChange}
        >
          {status.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
        <TextField
          id="standard-helperText"
          label="Location Name"
          defaultValue={props.event.location_name}
          onChange={handleLocationNameChange}
        />
        <br></br>
        <TextField
          id="standard-helperText"
          label="Location Address"
          defaultValue={props.event.location_address}
          onChange={handleLocationAddressChange}
        />
        <br></br>
        <TextField
          id="date"
          label="Event Date"
          type="date"
          defaultValue={props.event.date}
          onChange={handleEventDateChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <TextField
          id="time"
          label="Event Time"
          type="time"
          defaultValue={props.event.time}
          onChange={handleEventTimeChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <br></br>
        <br></br>
        <Button
          type="submit"
          fullWidth
          variant="contained"
        >
          Edit Session
        </Button>

        <br></br>
        <br></br>
      </div>
    </form>
  );
}
