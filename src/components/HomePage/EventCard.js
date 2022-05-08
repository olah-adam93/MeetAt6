/*  import {useNavigate} from "react-router-dom" 
    import {useEffect, useState, useCallback} from "react"*/
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
      Event Card
      <div className='event-pciture'>
        <img src={eventCard.img} alt='eventname' />
      </div>
      <div className='event-data'>
        <span>
          <strong>{eventCard.title}</strong>
        </span>
        <br />
        <span>{eventCard.date}</span>
        <br />
        <span>location?</span>
        <br />
        <span>{eventCard.organizer}</span>
        <br />
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
