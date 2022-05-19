import { useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import './App_GoogleMaps.css';
import Map from './components/Map';
import MapMarker from './components/MapMarker';
import MapPopup from './components/MapPopup';

function App() {
  const [map, setMap] = useState();

  return (
    <div className='App'>
      <h1>Google Maps</h1>
      <Wrapper apiKey={'AIzaSyD9MpMtp9BcSlZgMy26wtaaamLbfOQhu8s'}>
        <Map map={map} setMap={setMap}>
          <MapMarker map={map} position={{ lat: 46.25, lang: 20.1667 }}>
            <MapPopup />
          </MapMarker>
        </Map>
      </Wrapper>
    </div>
  );
}

export default App;
