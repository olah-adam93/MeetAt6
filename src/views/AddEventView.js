import {useEffect, useState} from 'react';
/*Components */
import BasicInfoForm from '../components/CreateNewEvent/BasicInfoForm';
import LocationOfEvent from '../components/CreateNewEvent/LocationOfEvent';
import TimeOfEvent from '../components/CreateNewEvent/TimeOfEvent';

const AddEventView = () => {
  const [locationtype, setLocationType] = useState('');

  return (
    <div className='create-new-event-container'>
      <h1>Create New Event</h1>
      <div className='new-event-form'>
        <form action=''>
          <h2>Basic Information</h2>
          <p>Create a new event with these information </p>
          <BasicInfoForm />

          {/*Tags - search 
          <label htmlFor="event-tags">Tags</label>
          <input type="text" id="event-tags"name="event-tags"/>*/}

          <h3>Time of the Event</h3>
          <TimeOfEvent />
          {/*kiegészíteni a dátumot */}

          <h3>Location</h3>
          <LocationOfEvent
            locationType={locationtype}
            setLocationType={setLocationType}
          />
          {/*search location , click-et kijavítani*/}
        </form>
      </div>
    </div>
  );
};
export default AddEventView;
