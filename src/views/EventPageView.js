import { useEffect, useContext, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

/* Googe Maps */
import { Wrapper } from '@googlemaps/react-wrapper';

/* Components */
import EventDetails from '../components/HomePage/EventDetails';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo';
import JoinModal from '../components/HomePage/JoinModal';
import Map from '../others/GoogleMaps/components/Map';

/* Style */
import './Style/EventPageView.css';

/* Database Context */
import { EventDbContext } from '../components/EventDbContext/EventDbContext';

/* CRUD */
import { updateData } from '../services/crud';

/* Firebase */
import { auth } from '../config/firebase';


const EventPageView = () => {
  const user = auth.currentUser;
  const eventDb = useContext(EventDbContext);
  const { eventId } = useParams();
  const [searchParams] = useSearchParams();
  const [eventInfo, setEventInfo] = useState([]);
  const [paymentSucces, setPaymentSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const filteredArray = eventDb.db.filter((event, index) => {
      const key = event[0];

      return key === eventId;
    });
    setEventInfo(...filteredArray);
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

  const clickHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

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

          <Wrapper apiKey={'AIzaSyD9MpMtp9BcSlZgMy26wtaaamLbfOQhu8s'}>
            <Map eventInfo={eventInfo[1]} />
          </Wrapper>
          
          {isOpen && (
            <JoinModal
              clickHandler={clickHandler}
              setIsOpen={setIsOpen}
              eventKey={eventInfo[0]}
              eventValue={eventInfo[1]}
            />
          )}
        </>
      )}
    </div>
  );
};
export default EventPageView;
