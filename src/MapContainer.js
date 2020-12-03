import React, { useState, useEffect } from 'react';
import MapEvents from "./MapEvents"
import axios from 'axios';


export default function MapContainer() {

  const [events, setEvents] = useState([])  //dont set as null or obj

  const getEvents = async () => {
    try {
      const allEvents = await
        axios.get("http://localhost:3001/events")
        const list = allEvents.data;
        const parsedList = list.map(event => 
          JSON.parse(event)
        ) 
      setEvents(parsedList); //set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEvents()
  }, []);

  return (
    <div style={{marginLeft: "15rem", marginTop: "5rem"}}>
      <MapEvents
        events={events}
        googleMapURL={``}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `1000px`, display: 'block' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}