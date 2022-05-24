import {useState, useEffect, useRef} from 'react';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import SearchMap from './SearchMap';

const GoogleMapLoader = ({data, setData, map, setMap}) => {
  const [marker, setMarker] = useState();
  const [infoWindow, setInfoWindow] = useState();
  const ref = useRef(null)
  /*useRef is needed to maintain a mutable object
   * that will persist for the lifetime of the component.*/
  const [center, setCenter] = useState({lat: 47.4979, lng: 19.0402});
  const [clicks, setClicks] = useState([]);
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  useEffect(() => {
    if (map) {
      map.setOptions({zoom: 6, center: center});

      new window.google.maps.Marker({
        position: center,
        map,
      });
    }
  }, [map, center]);

  /* useEffect(() => {
    if (!marker && map) {
      setMarker(
        new window.google.maps.Marker({
          position: { lat: center?.geoLat, lng: center?.geoLng},
          map,
          icon: {
            url: 'https://img.icons8.com/doodle/48/000000/google-maps-new.png',
            size: new window.google.maps.Size(32, 32),
            scaledSize: new window.google.maps.Size(32, 32),
            anchor: new window.google.maps.Point(0, 32),
          },
        })
      );
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker, map]);
  const clickHandler = (e) => {
    setCenter( [...center, e.latLng] 
    (prev )=> ({
      lat: e.geoLat,
      lng: e.geoLng
    })
    )
  } */
  return (
    <>
      
      <div ref={ref} style={{height: '50vh', width: '50vw', margin: 'auto'}} /* onClick={clickHandler} */></div>
    </>
  );
};
export default GoogleMapLoader;
