/*React*/
import { useEffect, useState } from 'react';
import { storage } from '../config/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
/*Components */
import BasicInfoForm from '../components/CreateNewEvent/BasicInfoForm';
import LocationOfEvent from '../components/CreateNewEvent/LocationOfEvent';
import NewEventInfo from '../components/CreateNewEvent/NewEventInfo';
import NewEventPayment from '../components/CreateNewEvent/NewEventPayment';
import TimeOfEvent from '../components/CreateNewEvent/TimeOfEvent';
import { createNewData } from '../services/crud';
import { getAuth } from '@firebase/auth';
import { useNavigate } from 'react-router';
/*Style */
import './Style/CreateEventView.css';
import { async } from '@firebase/util';

const CreateEventView = () => {
  const navigateTo = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [missingData, setMissingData] = useState(false);
  const [data, setData] = useState({
    uid: user.uid,
    title: '',
    organizer: '',
    /* attendant: undefined, */
    location: '',
    organizer: user.displayName,
    organizerEmail: user.email,
  });
  const [locationtype, setLocationType] = useState('');
  const [nextbtn, setNextBtn] = useState(0);
  useEffect(() => {
    console.log(data);
  }, [data]);
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
  /*  const onUploadImage = (e) => {
    const fileRef = ref(storage, `eventImages/${data?.image.name}`)
    uploadBytes(fileRef, data?.image)
    .then((uploadResult) =>{console.log("first");
      getDownloadURL(uploadResult?.ref)
      .then((value) => {setData((prev) => ({ ...prev, imageUrl: value }));
      console.log("second")
    })
      .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
  } */
  const submitHandler = (e) => {
    e.preventDefault();
    /* const eventCreated = new Date()
    const currentTime = eventCreated.toLocaleDateString("en-US")
    setData((prev)=> ({...prev, currentTime})) */
    /* createTime() */

    if (
      !data.title ||
      !data.locationType ||
      !data.paymentType ||
      !data.eventStarts || //itt vizsgálja hogy a múltban jönne létre?
      !data.eventEnds ||
      !data.startTime ||
      !data.endTime
      //attendant ne lehessen - eredmény
    ) {
      setMissingData(true);
      setTimeout(() => {
        setMissingData(false);
      }, 8000);
    } else {
      const currentDate = new Date(Date.now()).toUTCString().slice(-24, -4);
      console.log(currentDate);
      createNewData('events', { ...data, createdDate: currentDate });
      /* createNewData('events', data) */
      setData({});
      console.log('done');
      navigateTo('/create-success');
    }
  };
  return (
    <div className='create-new-event-container'>
      {missingData && (
        <h1 className='missing-data'>Missing data! Please fill every required field!</h1>
      )}
      <h1>Create New Event</h1>
      <div className='new-event-form'>
        <form action='' onSubmit={submitHandler}>
          {nextbtn === 0 && (
            <div className='basic-event-info'>
              <h2>Basic Information</h2>
              <p>Create a new event with these information </p>
              <BasicInfoForm setData={setData} data={data} />
              {/*Tags - search 
            <label htmlFor="event-tags">Tags</label>
            <input type="text" id="event-tags"name="event-tags"/>*/}
              <h3>Time of the Event</h3>
              <TimeOfEvent setData={setData} data={data} />
              <h3>Location</h3>
              <LocationOfEvent
                locationType={locationtype}
                setLocationType={setLocationType}
                setData={setData}
                data={data}
              />
              {/*search location , click-et kijavítani, Vissza Gomb*/}
            </div>
          )}
          {nextbtn === 1 && (
            <div className='new-event-details'>
              <NewEventInfo setData={setData} data={data} />
            </div>
          )}
          {nextbtn === 2 && (
            <div className='new-event-payment'>
              <NewEventPayment setData={setData} data={data} />
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
              <button type='submit' className='save-btn'>
                Save event
              </button>
            )}
            <h3 className="required">*: required</h3>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateEventView;
