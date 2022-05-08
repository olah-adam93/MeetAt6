import '../HomePage/Styles/EventContainer.css';

import { useEffect, useState } from 'react';
import EventCard from './EventCard';

/* import { Link } from 'react-router-dom'; */

export default function EventContainer() {
  /* Fetch a firebaseről setDb() */
  const [db, setDb] = useState([
    {
      img: 'https://placekitten.com/300/200',
      title: 'Event 1',
      date: '2022.05.23',
      organizer: 'Jómagam',
    },
    {
      img: 'https://placekitten.com/300/200',
      title: 'Event 2',
      date: '2022.07.03',
      organizer: 'Jómagam',
    },
    {
      img: 'https://placekitten.com/300/200',
      title: 'Event 3',
      date: '2022.05.23',
      organizer: 'Jómagam',
    },
    {
      img: 'https://placekitten.com/300/200',
      title: 'Event 4',
      date: '2022.06.01',
      organizer: 'Jómagam',
    },
  ]);
  const [eventCard1, setEventCard1] = useState({});
  const [eventCard2, setEventCard2] = useState({});
  const [eventCard3, setEventCard3] = useState({});
  const [eventCard4, setEventCard4] = useState({});
  useEffect(() => {
    db.map((event, index) => {
      if (index === db.length - 1) {
        setEventCard1(event);
      }
      if (index === db.length - 2) {
        setEventCard2(event);
      }
      if (index === db.length - 3) {
        setEventCard3(event);
      }
      if (index === db.length - 4) {
        setEventCard4(event);
      }
    });
  }, [db]);

  return (
    <div className='main_event_container'>
      <EventCard eventCard={eventCard1} />
      <EventCard eventCard={eventCard2} />
      <EventCard eventCard={eventCard3} />
      <EventCard eventCard={eventCard4} />
    </div>
  );
}
