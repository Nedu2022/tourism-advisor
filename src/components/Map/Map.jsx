import React from "react";
import googleMapReact from "google-map-react";
import {paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutlinedIcon from '@material-ui/icons/LocationOutlined';
import { Rating } from "@material-ui/lab";


import useStyles from './styles'

const Map = () => {
  const classes = useStyles();
  const isMoblie = useMediaQuery('(min-width:600px)');

  const coordinates = { lat: 0,}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
            bootstrapURLKeys={{ key: ''}}
            defaultCenter={}
            >
        

      </GoogleMapReact>
    </div>
  );
}


export default Map;
