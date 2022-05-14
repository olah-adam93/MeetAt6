/* import {useState} from 'react'; */

const LocationOfEvent = ({setLocationType, locationType, setData, data}) => {
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
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };
  return (
    <div className='location-container'>
      <div className='location-type'>
      <label htmlFor='venue'>Venue</label>
        <input
          type='radio'
          name='locationType'
          value='venue'
          id='venue'
          onChange={changeHandler}
          defaultChecked = { data?.locationType === 'venue'}
        />
        <label htmlFor='ticket'>Online</label>
        <input
          type='radio'
          name='locationType'
          value='online'
          onChange={changeHandler}
          id='online'
          defaultChecked = { data?.locationType === 'online'}
        />
        
      </div>
      {data?.locationType === 'venue' ? (
        <div>
          <p>Map</p>
          <label htmlFor="location">
          <input type='text' value={/* data?.locationType === 'online' ? '' : */ data?.location} name='location' id="location" onChange={changeHandler}/>
          </label>
        </div>
      ) : null}
    </div>
  );
};
export default LocationOfEvent;
