import React from "react";
import { Marker } from "react-google-maps";
import CameraIcon from "../src/assets/marker.jpg"

export default function MapMarker(props){

    return(
        <Marker
          position={props.location}
          icon={CameraIcon}>
        </Marker>
    );
  
}