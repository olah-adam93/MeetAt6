import './Style/MyEventsView.css';

import { useState, useContext, useEffect } from 'react';
import UserNavBar from '../components/Profile/UserNavbar';
import DisplayItems from '../components/SearchEvent/DisplayItems';

/* Database Context */
import { EventDbContext } from '../components/EventDbContext/EventDbContext';

/* AuthContext */
import { auth } from '../config/firebase';
import { readData } from '../services/crud';
// import { AuthContext } from '../components/Authentication/AuthContext';

const ChosenEvents = () => {
  const eventDb = useContext(EventDbContext);
  const [eventJoined, setEventJoined] = useState([]);

  // const userData = useContext(AuthContext);
  // vagy

  const user = auth.currentUser;

  const [eventsCard, setEventsCard] = useState([]);
  useEffect(() => {
    readData('eventAttendees').then((snapshot) => {
      setEventJoined(
        Object.entries(snapshot.val())
          .filter((eventArray, index) => {
            return Object.keys(eventArray[1]).includes(user.uid);
          })
          .map((eventKey, index) => {
            return eventKey[0];
          })
      );
    });
  }, []);
  console.log(eventJoined);

  useEffect(() => {
    const filteredArray = eventDb.db.filter((event) => {
      const value = event[1];
      const key = event[0];
      const filteredEventJoined = eventJoined.filter((eventKey) => {
        return key === eventKey;
      });
      return filteredEventJoined.includes(key);
    });
    setEventsCard(filteredArray);
    console.log('filtered arr: ', filteredArray);
  }, [eventDb, user, eventJoined]);

  return (
    <>
      <h1>Events joined by Me</h1>
      <div className='my-events-container'>
        <div className='my-events-sidebar'>
          <UserNavBar />
        </div>
        <div className='my-events-content'>
          {eventsCard.length === 0 ? (
            <div>No Events to display</div>
          ) : (
            <DisplayItems filteredDbItems={eventsCard} perPage={4} />
          )}
        </div>
      </div>
    </>
  );
};

export default ChosenEvents;
