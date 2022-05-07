import {useState} from 'react';

const LocationOfEvent = ({setLocationType, locationType}) => {
  /* const clickHandler= (e) => {
    e.preventDefault()
    if(e.name === 'venue'){
      setLocationType('venue')
    }
    if(e.name === 'online'){
      setLocationType('online')
    }
    else if(e.name === 'to-be-added'){
      setLocationType('to be added')
    }
    console.log(locationType)
  }  ---> még nem működik */

  return (
    <div className='location-container'>
      <div className='location-type'>
        <button type='button' name='venue'>
          Venue
        </button>
        <button type='button' name='online'>
          Online event
        </button>
        <button type='button' name='to-be-added'>
          To be Added
        </button>
      </div>
      {locationType && locationType === 'venue' ? <div>Map</div> : null}
    </div>
  );
};
export default LocationOfEvent;
