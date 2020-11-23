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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});






export default function ClientList() {
  const classes = useStyles();

  const [clients, setClients] = useState([])
  const [view, setView] = useState(false)
  const [clickedClient, setClickedClient] = useState(null)

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


  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Toolbar>
                <Typography variant="h6" id="tableTitle" component="div">
                  My Client List
        </Typography>
              </Toolbar>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell component="th" scope="client">
                  First Name: {client.first_name}
                  <br />
                Last Name: {client.last_name}
                </TableCell>
                <Button variant="contained" color="primary" onClick={(event) => handleViewEdit(event, client)}>View/Edit</Button>
              &nbsp;
                <Button variant="contained" color="primary">Create New Session</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {view ? <ClientProfile clickedClient={clickedClient}/>
          :
          null}
      </div>
    </>

  );
}
