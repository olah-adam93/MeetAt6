import { useState, useEffect, useRef } from 'react';

const Map = ({ eventInfo }) => {
  const [map, setMap] = useState();
  const [marker, setMarker] = useState();
  //const [infoWindow, setInfoWindow] = useState();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }

    if (map) {
      map.setOptions({
        zoom: 12,
        center: { lat: eventInfo?.geoLat, lng: eventInfo?.geoLng },
      });
    }
  }, [ref, map]);

  useEffect(() => {
    if (!marker && map) {
      setMarker(
        new window.google.maps.Marker({
          position: { lat: eventInfo?.geoLat, lng: eventInfo?.geoLng },
          map,
          //onclick: clickHandler,
        })
      );
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker, map]);

  /*
  useEffect(() => {
    if (!infoWindow && map) {
      setInfoWindow(
        new window.google.maps.InfoWindow({
          content: 'Content of the popup window...',
        })
      );
    }
  }, [infoWindow, map]);

  const clickHandler = () => {
    setInfoWindow((e) => {
      e.target.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }; */

  return <div className='event-map-container' ref={ref}></div>;
};

export default Map;
