//import { Marker } from '@googlemaps/react-wrapper';
import React from 'react';

const MapMarker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setMap(options?.map);
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

export default MapMarker;
