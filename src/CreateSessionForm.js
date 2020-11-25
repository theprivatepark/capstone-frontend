import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function CreateSessionForm() {
  const classes = useStyles();

  const [clients, setClients] = useState([])
  const status = ["consultation", "photo session", "editing", "complete"]
  const [clientPick, setClientPick] = useState(null)
  const [statusPick, setStatusPick] = useState(null)
  const [currentClient, setCurrentClient] = useState({})


  const getClients = async () => {
    try {
      const allClients = await
        axios.get("http://localhost:3001/clients")
      setClients(allClients.data); //set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClients()
  }, []);


  const handleClientChange = (event) => {
    setClientPick(event.target.value);
    console.log(event.target.value.id)
    setCurrentClient(event.target.value.id)

  }
  const handleStatusChange = (event) => {
    setStatusPick(event.target.value);
  }

  const handleClient = (event, clientId) => {
    console.log(clientId)
  }

  const handleSubmit = (e) => {
    console.log(e)
    console.log(e.target[1].value)
    const status = e.target[1].value
    const eventName = e.target[2].value // event name
    const locationName = e.target[3].value // location name
    const locationAddress = e.target[4].value //address
    const date = e.target[5].value //date
    const time = e.target[6].value //time

    let event = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: currentClient,
        event_name: eventName,
        location_name: locationName,
        location_address: locationAddress,
        date: date,
        time: time,
        status: status
      })
    }
    fetch("http://localhost:3001/events", event)
  }


  return (
    <form className={classes.root} noValidate onSubmit={(e) => { handleSubmit(e) }}>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Client Name"
          value={clientPick}
          onChange={handleClientChange}
        >
          {clients.map((client) => (
            <MenuItem value={client} onChange={(e) => { handleClient(e, client.id) }}>
              {client.first_name + " " + client.last_name}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
        <TextField
          id="standard-select-currency"
          select
          label="Status"
          value={statusPick}
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
          label="Event Name"
          defaultValue=" "
        />
        <br></br>
        <TextField
          id="standard-helperText"
          label="Location Name"
          defaultValue=" "
        />
        <br></br>
        <TextField
          id="standard-helperText"
          label="Location Address"
          defaultValue=" "
        />
        <br></br>
        <TextField
          id="date"
          label="Event Date"
          type="date"
          defaultValue="2020-12-03"
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
          defaultValue="XX:XX"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <br></br>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload Images to Gallery
        </Button>
        <br></br>
        <br></br>
        <Button
          type="submit"
          fullWidth
          variant="contained"
        >
          Create Session
        </Button>
        <br></br>
        <br></br>
      </div>
    </form>
  );
}
