import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from './MapMarker';


const EventsMap = withScriptjs(withGoogleMap((props) => {
console.log(props.events)
  // (props.events ? 
      const markers = props.events.map(({event}) => <MapMarker
      key={event.id}
      locationAddress={event.location_address}
      location={{ lat: event.latitude, lng: event.longitude }} />)
  // : 
  // null)


return (
  <GoogleMap
    defaultZoom={10}
    center={{ lat: 38.898130, lng: -77.032880 }}
  >
    {markers}
  </GoogleMap>
);
}
))

export default EventsMap;