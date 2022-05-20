import { useState, useRef, useEffect } from 'react';

const Map = ({ map, setMap }) => {
  const ref = useRef(null);
  //const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
    if (map) {
      map.setOptions({ zoom: 6, center: { lat: 46.25, lng: 20.1667 } });
    }
  }, [ref, map]);

  return <div ref={ref} style={{ height: '80vh', width: '50vw', margin: 'auto' }} />;
};

export default Map;
