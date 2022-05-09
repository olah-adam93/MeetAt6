/*React*/
import {useState} from 'react';
/*Components */
import BasicInfoForm from '../components/CreateNewEvent/BasicInfoForm';
import LocationOfEvent from '../components/CreateNewEvent/LocationOfEvent';
import NewEventInfo from '../components/CreateNewEvent/NewEventInfo';
import NewEventPayment from '../components/CreateNewEvent/NewEventPayment';
import TimeOfEvent from '../components/CreateNewEvent/TimeOfEvent';
/*Style */
import './Style/CreateEventView.css';

const CreateEventView = () => {
  //const [basicInfo, setBasicInfo] = useState([]);
  const [locationtype, setLocationType] = useState('');
  const [nextbtn, setNextBtn] = useState(0);
  const nextFormPageHandler = (e) => {
    e.preventDefault();
    if (nextbtn < 3) {
      setNextBtn((prev) => (prev += 1));
    }
  };
  const backFormPageHandler = (e) => {
    e.preventDefault();
    if (nextbtn > 0) {
      setNextBtn((prev) => (prev -= 1));
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
              <TimeOfEvent />
              <h3>Location</h3>
              <LocationOfEvent
                locationType={locationtype}
                setLocationType={setLocationType}
              />
              {/*search location , click-et kijavítani, Vissza Gomb*/}
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

          <div className='btn-container'>
            {nextbtn > 0 && (
              <button type='button' onClick={backFormPageHandler} className='back-btn'>
                Back
              </button>
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
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateEventView;