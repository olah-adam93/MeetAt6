import React, {useState, useEffect} from 'react';

/* Components */
import JoinModal from './JoinModal';

/* Firebase */
// import { getAuth, getUser } from 'firebase/auth';
import {auth} from '../../config/firebase';

/* CRUD */
import { readData } from '../../services/crud';

/* Fontawesome */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faEarthEurope, faGlobe} from '@fortawesome/free-solid-svg-icons';

const EventInfo = ({eventInfo, isOpen, setIsOpen, paymentSucces}) => {
  const [organizerData, setOrganizerData] = useState(false);
  const [eventKey, eventValue] = eventInfo;
  const user = auth.currentUser;
  const [attendees, setAttendees] = useState([]);
  
  useEffect(() => {
      readData('eventAttendees', eventKey).then((snapshot) => {
          setAttendees(Object.entries(snapshot.val() || {}));
      });
  }, [eventKey]);

  const clickHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const clickOrganizer = (e) => {
    if (organizerData) {
      setOrganizerData(false);
    } else {
      setOrganizerData(true);
    }
  };

  return (
    <div className='event-info-container'>
      {paymentSucces && <h2>Successfull payment!</h2>}

      <div className='event-info-date'>
        <FontAwesomeIcon className='event-info-icons' icon={faClock} />
        {new Date(eventValue?.eventStarts).getTime() ===
        new Date(eventValue?.eventEnds).getTime()
          ? `${new Date(eventValue?.eventStarts).toDateString()}`
          : `${new Date(eventValue?.eventStarts).toDateString()} - ${new Date(
              eventValue?.eventEnds
            ).toDateString()}`}
      </div>

      <div className='event-info-time'>
        {`${eventValue?.startTime} - ${eventValue?.endTime}`}
      </div>

      <div className='event-info-location'>
        {eventValue?.locationType === 'online' ? (
          <>
            {<FontAwesomeIcon className='event-info-icons' icon={faGlobe} />}
            Online event
          </>
        ) : (
          <>
            {<FontAwesomeIcon className='event-info-icons' icon={faEarthEurope} />}
            {eventValue?.location}
          </>
        )}
      </div>

      <div className='event-info-organizer' onClick={clickOrganizer}>
        Organizer: {eventValue?.organizer}
      </div>
      {/* {organizerData && (
        <div>
        <p>Event organizer contact: {eventValue?.organizerEmail}</p>
        <button onClick={clickOrganizer}>X</button>
        </div>
      )} */}

      <div className='event-info-attendees'>
        {/* Attendees: {attendees.length === 0 ? 0 : attendees.length} / {eventValue?.attendant} */}
        Attendees: {attendees.length === 0 ? 0 : attendees.length}   
      </div>

      <div className='event-info-price'>
        {eventValue?.paymentType === 'free' ? (
          <>{eventValue?.paymentType}</>
        ) : (
          <>{eventValue?.ticketPrice} huf</>
        )}
      </div>

      {user?.uid === eventValue?.uid ? (
        <p>You are the organizer of this event!</p>
      ) : (
        <button onClick={clickHandler} className='event-info-button'>
          Register
        </button>
      )}

      {/* {isOpen && (
        <JoinModal
          clickHandler={clickHandler}
          setIsOpen={setIsOpen}
          eventKey={eventKey}
          eventValue={eventValue}
        />
      )} */}
    </div>
  );
};

export default EventInfo;
