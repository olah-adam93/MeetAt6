/* Style */
import './Styles/EventContainer.css';

import { useEffect, useState, useContext } from 'react';

/* Database Context */
import { EventDbContext } from '../EventDbContext/EventDbContext';

/* Components */
import EventCard from './EventCard';

export default function EventContainer({
  containerName,
  eventCardIndex,
  searchKey,
  searchValue,
}) {
  /* Fetch a firebaseről setDb() */
  const eventDb = useContext(EventDbContext);
  const [eventsCard, setEventsCard] = useState([]);

  useEffect(() => {
    const filteredArray = eventDb.db.filter((event, index) => {
      const key = event[0];
      const value = event[1];

      return value?.[searchKey] === searchValue;
    });
    setEventsCard(filteredArray);
    // console.log('filtered arr: ', filteredArray);
    // console.log('eventdb: ', eventDb.db);
  }, [eventDb.db, searchKey, searchValue]);

  return (
    <>
      <h2 className='event-container-name'>{containerName}</h2>
      <br />
      <div className='main_event_container'>
        {eventsCard.map((event, index) => {
          if (index < 4) {
            return (
              <EventCard
                eventCard={event[1]}
                eventId={event[0]}
                key={`card_${event[0]}`}
              />
            );
          }
        })}
      </div>
      <br />
    </>
  );
}
