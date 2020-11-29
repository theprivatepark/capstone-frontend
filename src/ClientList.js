import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ClientProfile from './ClientProfile';
import CreateSession from './CreateSessionForm';


const useStyles = makeStyles({
  table: {
    minWidth: 550,
    backgroundColor: '#EDEDEA'
  },
  cell: {
    fontFamily: 'Crimson Text, serif',
  }
});


export default function ClientList() {
  const classes = useStyles();

  const [clients, setClients] = useState([])
  const [view, setView] = useState(false)
  const [clickedClient, setClickedClient] = useState(null)
  const [create, setCreate] = useState(false)
  const [client, setClient] = useState("")

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

  const handleViewEdit = (event, client) => {
    event.preventDefault();
    setClickedClient(client);
    setView(!view);
  }

  const handleCreate = (event, client) => {
    event.preventDefault();
    console.log(event)
    console.log(client)
    setCreate(!create)
    setClient(client)
  }


  return (
    <>
      <div>
        {create ? <CreateSession client={client}/> 
        :
        <>
        {view ?
          <div>
            <ClientProfile clickedClient={clickedClient} />
            <Button style={{ backgroundColor: "red" }} onClick={() => { setView(!view) }}>Go Back to Client List</Button>
          </div>
          :
          <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <Toolbar>
                    <Typography variant="h6" id="tableTitle" component="div" className={classes.cell}>
                      My Client List
                </Typography>
                  </Toolbar>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.sort((a, b) => a.id - b.id).map((client) => (
                  <TableRow key={client.id}>
                    <TableCell component="th" scope="client" className={classes.cell}>
                      First Name: {client.first_name}
                      <br />
                Last Name: {client.last_name}
                    </TableCell>
                    <br></br>
                    <Button variant="contained" onClick={(event) => handleViewEdit(event, client)}>View</Button>
              &nbsp;
                    <Button variant="contained" onClick={(event) => handleCreate(event, client)}>Create Session</Button>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>}
          </>
      }
      </div>
    </>

  );
}
