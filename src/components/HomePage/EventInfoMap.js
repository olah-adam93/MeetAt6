import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

/* Style */
import './Styles/EventInfoMap.css';

/* Image */
import eventImagePlaceholder from '../../others/logo/logo7.3.png';

const EventInfoMap = ({eventInfo}) => {
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
        // gestureHandling: "greedy",
      });
    }
  }, [ref, map]);

  useEffect(() => {
    
    if (!marker && map && eventInfo?.length > 0) {

      eventInfo.map((event) => {
        const [key, value] = event;

        const newMarker = new window.google.maps.Marker({
          position: { lat: Number(value?.geoLat), lng: Number(value?.geoLng) },
          map,
          optimized: true,
          animation: window.google.maps.Animation.DROP,
          // icon: {
          //   url: 'https://img.icons8.com/doodle/48/000000/google-maps-new.png',
          //   // size: new window.google.maps.Size(32, 32),
          //   // scaledSize: new window.google.maps.Size(32, 32),
          //   // anchor: new window.google.maps.Point(0, 32),
          // },
        })

        const infowindow = new window.google.maps.InfoWindow({
          content: `<div class='google-maps-event-infowindow-container'>
            <div class='google-maps-event-infowindow-img'><img src='${value?.imageUrl ? value?.imageUrl : eventImagePlaceholder}' alt=''></div>
            <div class='google-maps-event-infowindow-content-'>
              <div class='google-maps-event-infowindow-title'>${value?.title.length > 45 ? value?.title.slice(0, 45) + '...' : value?.title}</div>
              <div class='google-maps-event-infowindow-date'>${new Date(value?.eventStarts).toDateString() + ' - ' + value?.startTime}</div>
            </div>
          </div>`,
        });

        newMarker.addListener('click', (param) => {
          // console.log('click on marker', param, event);
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
    console.log('MARKER RENDER');
  }, [marker, map, eventInfo]);

  return (
    <>
    <div className='goole-maps-event-container' ref={ref}></div>
    </>
  )
};

export default EventInfoMap;