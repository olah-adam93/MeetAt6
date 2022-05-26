import './Style/MapComponent.css';

import { useState, useEffect, useRef } from 'react';

const MapComponent = ({eventInfo}) => {
  const [map, setMap] = useState();
  const [marker, setMarker] = useState();
  const [infoWindow, setInfoWindow] = useState();
  const ref = useRef(null);


  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }

    if (map) {
      map.setOptions({
        zoom: 6,
        // center: { lat: eventInfo[1]?.geoLat, lng: eventInfo[1]?.geoLng },
        center: { lat: 47, lng: 19},
      });
    }
  }, [ref, map]);

  useEffect(() => {
    if (!marker && map) {
      const eventArr = eventInfo;

      eventArr.map((event) => {
        const [key, value] = event;
        return setMarker(
          new window.google.maps.Marker({
            position: { lat: Number(value?.geoLat), lng: Number(value?.geoLng) },
            map,
            icon: {
              url: 'https://img.icons8.com/doodle/48/000000/google-maps-new.png',
              size: new window.google.maps.Size(32, 32),
              scaledSize: new window.google.maps.Size(32, 32),
              anchor: new window.google.maps.Point(0, 32),
            },
          })
        );
      });
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }
    
  }, [marker, map]);

  useEffect(() => {
    console.log(marker);

    if (!infoWindow && map) {
      const eventArr = eventInfo;

      eventArr.map((event) => {
        const [key, value] = event;
        return setInfoWindow(
          new window.google.maps.InfoWindow({
            content: `<div className='event-map-popup-content'>
            ${value?.title}</br>
            ${value?.eventStarts}: ${value?.startTime} - ${value?.eventEnds}: ${value?.endTime}
            </div>`,
          })
        );
      })

    }
  }, [infoWindow, map]);

  const clickHandler = () => {
    const eventArr = eventInfo;

    infoWindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
    // eventArr.map((event) => {
    //   const [key, value] = event;

    // })
  };


  return <div className='event-map-container' ref={ref} onClick={clickHandler}></div>;

};

export default MapComponent;
