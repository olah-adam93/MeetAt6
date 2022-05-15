import './Style/MyEventsView.css';

import {useState, useContext, useEffect} from 'react';
import UserNavBar from '../components/Profile/UserNavbar';
import DisplayItems from '../components/SearchEvent/DisplayItems';

/* Database Context */
import {EventDbContext} from '../components/EventDbContext/EventDbContext';

/* AuthContext */
import {getAuth} from '@firebase/auth';

const MyEventsView = () => {
  const eventDb = useContext(EventDbContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const [eventsCard, setEventsCard] = useState([]);

  useEffect(() => {
    console.log('eventdb: ', eventDb.db);

    const filteredArray = eventDb.db.filter((event) => {
      const value = event[1];

      return value?.uid === user?.uid;
    });
    setEventsCard(filteredArray);
    console.log('filtered arr: ', filteredArray);
  }, [eventDb.db, user?.uid]);

  return (
    <>
      <h1>Events Created by Me</h1>
      <div className='my-events-container'>
        <div className='my-events-sidebar'>
          <UserNavBar />
        </div>
        <div className='my-events-content'>
          <DisplayItems filteredDbItems={eventsCard} perPage={3} />
        </div>
      </div>
    </>
  );
};

export default MyEventsView;
