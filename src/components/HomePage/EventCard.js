import { Link } from 'react-router-dom';

import './Styles/EventCard.css';
import eventImagePlaceholder from '../../others/logo/logo7.3.png';

const EventCard = ({
  eventObj,
  eventCard,
  eventId,
  isUnsubscribeButton,
  isDeleteButton,
  unsubscribeModalHandler,
  deleteModalHandler,
  modalOpen,
  unsubscribeModalOpen,
  cancelHandler,
  deleteHandler,
  unsubscribeHandler,
  deletedEvent,
  unsubscribedEvent,
}) => {
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
        <div className='event-picture-container'>
          {eventCard?.imageUrl ? (
            <img
              className='event-picture-img'
              src={eventCard?.imageUrl}
              alt={eventCard?.title}
            />
          ) : (
            <img
              className='event-picture-default-img'
              src={eventImagePlaceholder}
              alt='default event'
            />
          )}
        </div>
      </Link>

      <div className='event-data'>
        <Link className='event-data-title' to={`/eventpage/${eventId}`}>
          <h3>{eventCard?.title}</h3>
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

      <div className='event-button'>
        {isUnsubscribeButton && (
          <>
            <button type='button' onClick={unsubscribeModalHandler(eventObj)}>
              Unsubscribe
            </button>
          </>
        )}
        {isDeleteButton && (
          <>
            <button type='button' onClick={deleteModalHandler(eventObj)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default EventCard;
