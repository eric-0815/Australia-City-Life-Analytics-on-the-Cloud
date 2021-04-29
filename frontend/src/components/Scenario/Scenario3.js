import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 60.2517722, lng: 24.8989093 }}
      >
        <Marker position={{ lat: 60.2517722, lng: 24.8989093 }} />
      </GoogleMap>
    );
  })
);


const Scenario3 = () => (
  <div className="App">
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyALLEWvdI0oAzAPfEydwednIX6173KnBUQ&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
  </div>
)

export default Scenario3;