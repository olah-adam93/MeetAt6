import { Link, useParams } from 'react-router-dom';
/*  import {useEffect, useState, useCallback} from "react"*/
const EventCard = ({ eventCard }) => {
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
      <Link to={`/eventpage/&{event.title}`}>
        <div className='event-pciture'>
          <img src={eventCard?.img} alt={'eventname'} />
        </div>
      </Link>
      <div className='event-data'>
        <Link to={`/eventpage/&{event.title}`}>
          <span>
            <strong>{eventCard?.title}</strong>
          </span>
        </Link>
        <br />
        <span>{eventCard?.eventStarts + ' '}</span>
        <span>{eventCard?.startTime}</span>-<span>{eventCard?.eventEnds + ' '}</span>
        <span>{eventCard?.endTime}</span>
        <br />
        <span>Location: {eventCard?.location}</span>
        <br />
        <span>Organizer: {eventCard?.organizer}</span>
        <br />
        <span>Attendant limit: {eventCard?.attendant}</span>
      </div>
      {/*

    return (
        <div className="event-card">
            Event Card
            <div className="event-pciture"><img src="src" alt="eventname"/></div>
            <div className="event-data">
                <span>
                    <strong>event.title</strong>
                </span>
                <span>event.date</span>
                <span>location?</span>
                <span>organizer</span>
                <span>attendant?</span>
            </div>
            {/*
            img
            title - clickHandler
            date
            location -ha lesz geolocation akkor a térképre?
            event organizer
            attendant 
            */}
    </div>
  );
};
export default EventCard;
