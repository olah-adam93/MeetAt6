/* import {useState} from 'react'; */

const LocationOfEvent = ({setLocationType, locationType}) => {
  const clickHandler= (e) => {
    e.preventDefault()
    if(e.target.name === 'venue'){
      setLocationType('venue')
    }
    if(e.target.name === 'online'){
      setLocationType('online')
    }
    else if(e.target.name === 'to-be-added'){
      setLocationType('to be added')
    }
    console.log(locationType)
  }  

  return (
    <div className='location-container'>
      <div className='location-type'>
        <button type='button' name='venue' onClick={clickHandler}>
          Venue
        </button>
        <button type='button' name='online' onClick={clickHandler}>
          Online event
        </button>
        <button type='button' name='to-be-added' onClick={clickHandler}>
          To be Added
        </button>
      </div>
      {(locationType === 'venue') ? <div>Map</div> : null}
    </div>
  );
};
export default LocationOfEvent;
