import { Wrapper } from '@googlemaps/react-wrapper';
import EventDetails from '../components/HomePage/EventDetails';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo';
import Map from '../others/GoogleMaps/components/Map';
import './Style/EventPageView.css';

import { useParams, useSearchParams } from 'react-router-dom';

import { EventDbContext } from '../components/EventDbContext/EventDbContext';
import { useEffect, useContext, useState } from 'react';
import { updateData } from '../services/crud';
import { auth } from '../config/firebase';
const EventPageView = () => {
  const [eventInfo, setEventInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const user = auth.currentUser;
  const eventDb = useContext(EventDbContext);
  const { eventId } = useParams();
  const [searchParams] = useSearchParams();
  const [paymentSucces, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const filteredArray = eventDb.db.filter((event, index) => {
      const key = event[0];
      const value = event[1];

      return key === eventId;
    });
    setEventInfo(...filteredArray);

    // console.log('eventdb: ', eventDb.db);
  }, [eventDb.db, eventId]);
  useEffect(() => {
    if (searchParams.get('success') && eventInfo?.[0] && user?.uid) {
      updateData('eventAttendees', eventInfo[0], { [user.uid]: user.displayName }).then(
        () => {
          setIsOpen(false);
          setPaymentSuccess(true);
        }
      );
    }
  }, [searchParams, eventInfo, user]);
  return (
    <div className='event-page'>
      {eventInfo && (
        <>
          <EventImage eventInfo={eventInfo[1]} />
          <EventInfo
            eventInfo={eventInfo}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            paymentSucces={paymentSucces}
          />
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
