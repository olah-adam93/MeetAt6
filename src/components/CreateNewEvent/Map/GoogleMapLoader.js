import {useState, useEffect, useRef} from 'react';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import SearchMap from './SearchMap';

const GoogleMapLoader = ({data, setData, map, setMap}) => {
  const ref = useRef(null);
  /*useRef is needed to maintain a mutable object
   * that will persist for the lifetime of the component.*/
  const [center, setCenter] = useState({lat: 47.4979, lng: 19.0402});

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
  return (
    <>
      {/*még kérdéses, hogy fizetős-e <SearchMap setCenter={setCenter} data={data} setData={setData}/>  még kérdéses, hogy fizetős-e*/}
      <div ref={ref} style={{height: '50vh', width: '50vw', margin: 'auto'}}></div>
    </>
  );
};
export default GoogleMapLoader;
