import {useState} from 'react';
/*Components */
import BasicInfoForm from '../components/CreateNewEvent/BasicInfoForm';
import LocationOfEvent from '../components/CreateNewEvent/LocationOfEvent';
import NewEventInfo from '../components/CreateNewEvent/NewEventInfo';
import NewEventPayment from '../components/CreateNewEvent/NewEventPayment';
import TimeOfEvent from '../components/CreateNewEvent/TimeOfEvent';

const CreateEventView = () => {
  //const [basicInfo, setBasicInfo] = useState([]);
  const [locationtype, setLocationType] = useState('');
  const [nextbtn, setNextBtn] = useState(0);
  const nextFormPageHandler = (e) => {
    e.preventDefault();
    if (nextbtn < 3) {
      setNextBtn((prev) => (prev += 1));
    }
    if (nextbtn === 2) {
    }
  };
  return (
    <div className='create-new-event-container'>
      <h1>Create New Event</h1>
      <div className='new-event-form'>
        <form action=''>
          {nextbtn === 0 && (
            <div className='basic-event-info'>
              <h2>Basic Information</h2>
              <p>Create a new event with these information </p>
              <BasicInfoForm />

              {/*Tags - search 
            <label htmlFor="event-tags">Tags</label>
            <input type="text" id="event-tags"name="event-tags"/>*/}

              <h3>Time of the Event</h3>
              <TimeOfEvent /> {/*kiegészíteni */}

              <h3>Location</h3>
              <LocationOfEvent
                locationType={locationtype}
                setLocationType={setLocationType}
              />
              {/*search location , click-et kijavítani, tovább gomb??? details, stb még megírni hozzá*/}
            </div>
          )}
          {nextbtn === 1 && (
            <div className='new-event-details'>
              <NewEventInfo />
            </div>
          )}
          {nextbtn === 2 && (
            <div className='new-event-payment'>
              <NewEventPayment />
            </div>
          )}
          {nextbtn < 2 && (
            <button type='button' onClick={nextFormPageHandler} className='next-btn'>
              Next
            </button>
          )}
          {nextbtn === 2 && (
            <button type='button' className='save-btn'>
              Save event
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
export default CreateEventView;
