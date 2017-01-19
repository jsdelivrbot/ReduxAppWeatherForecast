import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  console.log("props: " + props.lat, props.lon);
  return (
    <GoogleMapLoader
      containerElement={ <div stryle={{height: '100%'}} />}
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng:props.lon}} />
      }
    />
  );
}
