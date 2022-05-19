import { Link, useParams } from 'react-router-dom';
/*  import {useEffect, useState, useCallback} from "react"*/
const EventCard = ({eventCard, eventId}) => {
  /* const [eventData, setEventData] = useState();
    const navigateTo =useNavigate()*/
  /*fetch from firebase? */
  /*useEffect(()=> {
        async function eventInfo(){
            const event = await fetch('') -->kiegészíteni
            const responseEvent = await event.json()
            setEventData() -->kiegészíteni
        }
        eventInfo()
    }, []) --> ezt a containerbe átrakni*/
  /* const clickHandler = (e)=>{
        navigateTo ---> majd az eventpagere
    }*/

  return (
    <div className='event-card'>
      <Link to={`/eventpage/${eventId}`}>
        <div className='event-picture'>
          {eventCard?.imageUrl && (
            <img src={eventCard?.imageUrl} alt={eventCard?.title} />
          )}
        </div>
      </Link>
      <div className='event-data'>
        <Link to={`/eventpage/${eventId}`}>
          <span>
            <strong>{eventCard?.title}</strong>
          </span>
        </Link>
        <br />
        <span>{eventCard?.eventStarts + ' '}</span>
        <span>{eventCard?.startTime}</span>-<span>{eventCard?.eventEnds + ' '}</span>
        <span>{eventCard?.endTime}</span>
        <br />
        <span>Location: {eventCard?.location || eventCard?.locationType}</span>
        <br />
        <span>Organizer: {eventCard?.organizer}</span>
        <br />
        <span>Attendant limit: {eventCard?.attendant}</span>
      </div>
    </div>
  );
};
export default EventCard;
