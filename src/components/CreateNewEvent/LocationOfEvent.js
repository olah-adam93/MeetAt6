/* import {useState} from 'react'; */

const LocationOfEvent = ({setLocationType, locationType, setData, data}) => {
  const clickHandler = (e) => {
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
  };
  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if(e.target.value === "venue"){
      setLocationType('venue');
    }else{
      setLocationType('');
    }
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
          onClick={changeHandler}
        />
        <label htmlFor='ticket'>Online</label>
        <input
          type='radio'
          name='locationType'
          value='online'
          onClick={changeHandler}
          id='online'
        />
        {/* <button type='button' name='venue' onClick={clickHandler}>
          Venue
        </button>
        <button type='button' name='online' onClick={clickHandler}>
          Online event
        </button>
        <button type='button' name='to-be-added' onClick={clickHandler}>
          To be Added
        </button> */}
      </div>
      {locationType === 'venue' ? (
        <div>
          <p>Map</p>
        </div>
      ) : null}
    </div>
  );
};
export default LocationOfEvent;
