import { useState, useEffect, useRef } from 'react';

/* Style */
import './Style/MapComponent.css';

const MapComponent = ({eventInfo}) => {
  const [map, setMap] = useState();
  const [marker, setMarker] = useState();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        mapId: 'f351ed5064543873',
      }));
    }

    if (map) {
      map.setOptions({
        zoom: 6.5,
        // center: { lat: eventInfo[1]?.geoLat, lng: eventInfo[1]?.geoLng },
        center: { lat: 47.162494, lng: 19.503304},
        // disableDefaultUI: true,
        mapTypeControl: false,
        streetViewControl: false,
        gestureHandling: "greedy",
      });
    }
  }, [ref, map]);

  useEffect(() => {
    if (!marker && map && eventInfo?.length > 0) {
      const eventArr = eventInfo;

      eventArr.map((event) => {
        const [key, value] = event;

        const newMarker = new window.google.maps.Marker({
          position: { lat: Number(value?.geoLat), lng: Number(value?.geoLng) },
          map,
          optimized: true,
          animation: window.google.maps.Animation.DROP,
          // icon: {
          //   url: 'https://img.icons8.com/doodle/48/000000/google-maps-new.png',
          //   size: new window.google.maps.Size(32, 32),
          //   scaledSize: new window.google.maps.Size(32, 32),
          //   anchor: new window.google.maps.Point(32, 32),
          // },
        })

        const infowindow = new window.google.maps.InfoWindow({
          content: "Hello"+value?.title,
        });

        newMarker.addListener('click', (param) => {
          console.log('click on marker', param, event);
          infowindow.open({
            anchor: newMarker,
            map,
            shouldFocus: false,
          });
        })
        return setMarker(newMarker);
      });


      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }

  }, [marker, map, eventInfo]);

 /*  useEffect(() => {
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
  }, [infoWindow, map]); */

  return <div className='display-maps' ref={ref}></div>;
};

export default MapComponent;
