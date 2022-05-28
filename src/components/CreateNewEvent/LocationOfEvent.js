import { useState, useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMapLoader from './Map/GoogleMapLoader';
import MapWrapped from './Map/MapWrapped';

const LocationOfEvent = ({ setLocationType, locationType, setData, data }) => {
  const [map, setMap] = useState();
  /* const clickHandler = (e) => {
    e.preventDefault();
    if (e.target.name === 'venue') {
      setLocationType('venue');
    }
    if (e.target.name === 'online') {
      setLocationType('online');
    } else if (e.target.name === 'to-be-added') {
      setLocationType('to be added');
    }
    console.log(locationType);
  }; */
  const changeHandler = (e) => {
    if(e.target.value === "online"){
      setData((prev) => ({ ...prev, location: '', geoLat: '', geoLng: '', [e.target.name]: e.target.value }));

    }
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='location-container'>
      <h2>Location</h2>
      <div className='location-type'>
        <label htmlFor='venue'>
          Venue*
          <input
            type='radio'
            name='locationType'
            value='venue'
            id='venue'
            onChange={changeHandler}
            defaultChecked={data?.locationType === 'venue'}
          />
        </label>
        <label htmlFor='ticket'>
          Online*
          <input
            type='radio'
            name='locationType'
            value='online'
            onChange={changeHandler}
            id='online'
            defaultChecked={data?.locationType === 'online'}
          />
        </label>
        
      </div>
      
      <div>
        <div>
          <p>Please write the address here</p>
          <label htmlFor='location'> Address</label>
          <input
            type='text'
            value={data?.location}
            name='location'
            id='location'
            onChange={changeHandler}
          />

          <p>Point on the Map</p>
          
          <br />
          <div className='map-box'>
            <MapWrapped data={data} setData={setData} map={map} setMap={setMap} />
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default LocationOfEvent;
