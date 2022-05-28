import React, { useState } from 'react';
import JoinModal from './JoinModal';
import { getAuth, getUser } from 'firebase/auth';

const EventInfo = ({ eventInfo, isOpen, setIsOpen, paymentSucces }) => {
  const clickHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const [eventKey, eventValue] = eventInfo;
  /* const clickOrganizer = (e) =>{
    
  } */
  return (
    <div className='eventinfo-container'>
      {paymentSucces && <h2>Successfull payment!</h2>}
      <div className='eventinfo-details'>Event name: {eventValue?.title}</div>
      <div className='eventinfo-details'>Event place: {eventValue?.location}</div>
      <div className='eventinfo-details'>
        Event date:{' '}
        {`${eventValue?.eventStarts}: ${eventValue?.startTime} - ${eventValue?.eventEnds}: ${eventValue?.endTime}`}
      </div>
      <div /* onClick={clickOrganizer} */>Event organizer: {eventValue?.organizer}</div>

      <button onClick={clickHandler} className='eventinfo-join-button'>
        Join
      </button>

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
