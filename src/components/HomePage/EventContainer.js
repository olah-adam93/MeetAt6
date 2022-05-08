import '../HomePage/Styles/EventContainer.css';
import { Link } from 'react-router-dom';

export default function EventContainer() {
  const db = [
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
  ];

  return (
    <div className='main_event_container'>
      {db.map((event, index) => {
        return (
          <div className='main_events' key={index}>
            <img src={event.img} alt='' />
            <br />
            <span>
              <Link to={`/eventpage/${event.title}`}>
                {' '}
                <strong>{event.title}</strong>{' '}
              </Link>
            </span>
            <br />
            <span>Dátum: {event.date}</span>
            <br />
            <span>Szervező: {event.organizer}</span>
          </div>
        );
      })}
    </div>
  );
}
