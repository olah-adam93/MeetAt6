import EventDetails from '../components/HomePage/EventDetails';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo';
import './Style/EventPageView.css';

import { useParams } from 'react-router-dom';

import { EventDbContext } from '../components/EventDbContext/EventDbContext';
import { useEffect, useContext, useState } from 'react';

const EventPageView = () => {
  const [eventInfo, setEventInfo] = useState([]);
  const eventDb = useContext(EventDbContext);
  const {eventId} = useParams();
  console.log(eventDb);

  useEffect(() => {
    const filteredArray = eventDb.db.filter((event, index) => {
      const key = event[0];
      const value = event[1];
      console.log('key:', key);
      console.log('id:', eventId);

      return key === eventId;
    });
    setEventInfo(...filteredArray);
    console.log('filtered arr: ', filteredArray);
    // console.log('eventdb: ', eventDb.db);
  }, [eventDb.db, eventId]);
  

  return (
    <div className='event-page'>
      {eventInfo && 
        <>
        <EventImage eventInfo={eventInfo[1]}/>
        <EventInfo eventInfo={eventInfo}/>
        <EventDetails eventInfo={eventInfo[1]} />
        </>
      }      
    </div>
  );
};
export default EventPageView;
