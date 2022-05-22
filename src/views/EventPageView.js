import { Wrapper } from '@googlemaps/react-wrapper';
import EventDetails from '../components/HomePage/EventDetails';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo';
import Map from '../others/GoogleMaps/components/Map';
import './Style/EventPageView.css';

import { useParams } from 'react-router-dom';

import { EventDbContext } from '../components/EventDbContext/EventDbContext';
import { useEffect, useContext, useState } from 'react';

const EventPageView = () => {
  const [eventInfo, setEventInfo] = useState([]);
  const eventDb = useContext(EventDbContext);
  const { eventId } = useParams();

  useEffect(() => {
    const filteredArray = eventDb.db.filter((event, index) => {
      const key = event[0];
      const value = event[1];

      return key === eventId;
    });
    setEventInfo(...filteredArray);

    // console.log('eventdb: ', eventDb.db);
  }, [eventDb.db, eventId]);

  return (
    <div className='event-page'>
      {eventInfo && (
        <>
          <EventImage eventInfo={eventInfo[1]} />
          <EventInfo eventInfo={eventInfo} />
          <EventDetails eventInfo={eventInfo[1]} />
          {/*<Wrapper apiKey={'AIzaSyD9MpMtp9BcSlZgMy26wtaaamLbfOQhu8s'}>
            <Map eventInfo={eventInfo[1]} />
          </Wrapper>*/}
        </>
      )}
    </div>
  );
};
export default EventPageView;
