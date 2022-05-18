import React, {useState} from 'react';
import JoinModal from './JoinModal'


const EventInfo = ({eventInfo}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const clickHandler = () => {
    setIsOpen(!isOpen);
  }
  const [eventKey, eventValue] = eventInfo;


  return (
    <div className='eventinfo-container'>
      <div className='eventinfo-details'>Event name: {eventValue?.title}</div>
      <div className='eventinfo-details'>Event place: {eventValue?.location}</div>
      <div className='eventinfo-details'>
        Event date: {`${eventValue?.eventStarts}: ${eventValue?.startTime} - ${eventValue?.eventEnds}: ${eventValue?.endTime}`}
        </div>

      <button onClick={clickHandler} className='eventinfo-join-button'>Join</button>

      {isOpen && <JoinModal clickHandler={clickHandler} eventKey={eventKey} eventValue={eventValue}/>}
    </div>
        );
};

export default EventInfo;
