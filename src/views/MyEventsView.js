import './Style/MyEventsView.css';

import {useState, useContext, useEffect} from 'react';
import UserNavBar from '../components/Profile/UserNavbar';
import DisplayItems from '../components/SearchEvent/DisplayItems';

/* Database Context */
import {EventDbContext} from '../components/EventDbContext/EventDbContext';

/* AuthContext */
import {getAuth} from '@firebase/auth';
// import { AuthContext } from '../components/Authentication/AuthContext';

const MyEventsView = () => {
  const eventDb = useContext(EventDbContext);

  // const userData = useContext(AuthContext);
  // vagy
  const auth = getAuth();
  const user = auth.currentUser;

  const [eventsCard, setEventsCard] = useState([]);


  useEffect(() => {
    console.log('eventdb: ', eventDb.db);
    console.log(user);

    const filteredArray = eventDb.db.filter((event) => {
      const value = event[1];
      return value?.uid === user?.uid;
    });
    setEventsCard(filteredArray);
    console.log('filtered arr: ', filteredArray);
  }, [eventDb, user]);

  return (
    <>
      <h1>Events Created by Me</h1>
      <div className='my-events-container'>
        <div className='my-events-sidebar'>
          <UserNavBar />
        </div>
        <div className='my-events-content'>
          {eventsCard.length === 0 ? <div>No Events to display</div> : <DisplayItems filteredDbItems={eventsCard} perPage={3} />}
        </div>
      </div>
    </>
  );
};

export default MyEventsView;
