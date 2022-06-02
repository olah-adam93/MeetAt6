import React, { useState } from 'react';
import JoinModal from './JoinModal';
import { getAuth, getUser } from 'firebase/auth';
import { auth } from '../../config/firebase';

const EventInfo = ({ eventInfo, isOpen, setIsOpen, paymentSucces }) => {
  const clickHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const [organizerData, setOrganizerData] = useState(false);
  const [eventKey, eventValue] = eventInfo;
  const clickOrganizer = (e) =>{
    if(organizerData){
      setOrganizerData(false)
    }else{
      setOrganizerData(true)
    }
    
  }
  const user = auth.currentUser;
  return (
    <div className='event-info-container'>
      {paymentSucces && <h2>Successfull payment!</h2>}
      <div className='eventinfo-details'>Event name: {eventValue?.title}</div>
      <div className='eventinfo-details'>Event place: {eventValue?.location}</div>
      <div className='eventinfo-details'>
        Event date:{' '}
        {`${eventValue?.eventStarts}: ${eventValue?.startTime} - ${eventValue?.eventEnds}: ${eventValue?.endTime}`}
      </div>
      <div onClick={clickOrganizer}>Event organizer: {eventValue?.organizer}</div>
      {organizerData && 
      <div>
        <p>Event organizer contact: {eventValue?.organizerEmail}</p>
        <button onClick={clickOrganizer}>X</button>
      </div>}
      {user?.uid === eventValue?.uid ? (
        <p>You are the organizer of this event!</p>
      ) : (
      <button onClick={clickHandler} className='eventinfo-join-button'>
        Join
      </button>)
      }
      

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
