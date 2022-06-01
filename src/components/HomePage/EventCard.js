import {Link} from 'react-router-dom';

/* Style */
import './Styles/EventCard.css';

/* Image */
import eventImagePlaceholder from '../../others/logo/logo7.3.png';

const EventCard = ({
  eventSearchStyle,
  eventObj,
  eventCard,
  eventId,
  isUnsubscribeButton,
  isDeleteButton,
  unsubscribeModalHandler,
  deleteModalHandler,
}) => {
  return (
    <div className={eventSearchStyle ? 'event-card-container-search' : 'event-card-container'}>
      <Link
        className={
          eventSearchStyle ? 'event-card-inner-container-search' : 'event-card-inner-container'
        }
        to={`/eventpage/${eventId}`}
      >
        <div className={eventSearchStyle ? 'event-card-search' : 'event-card'}>
          <div
            className={
              eventSearchStyle
                ? 'event-picture-container-search'
                : 'event-picture-container'
            }
          >
            <div
              className={
                eventSearchStyle
                  ? 'event-picture-img-link-search'
                  : 'event-picture-img-link'
              }
            >
              {eventCard?.imageUrl ? (
                <img
                  className={
                    eventSearchStyle ? 'event-picture-img-search' : 'event-picture-img'
                  }
                  src={eventCard?.imageUrl}
                  alt={eventCard?.title}
                />
              ) : (
                <img
                  className={
                    eventSearchStyle
                      ? 'event-picture-default-img-search'
                      : 'event-picture-default-img'
                  }
                  src={eventImagePlaceholder}
                  alt='default event'
                />
              )}
            </div>
          </div>

          <div className={eventSearchStyle ? 'event-data-search' : 'event-data'}>
            <p
              className={eventSearchStyle ? 'event-data-date-search' : 'event-data-date'}
            >
              {new Date(eventCard?.eventStarts).toDateString() +
                ' - ' +
                eventCard?.startTime}
            </p>

            <div
              className={
                eventSearchStyle ? 'event-data-title-search' : 'event-data-title'
              }
            >
              {eventCard?.title.length > 45 ? eventCard?.title.slice(0, 45) + '...' : eventCard?.title}
            </div>
              
            <p
              className={
                eventSearchStyle ? 'event-data-location-search' : 'event-data-location'
              }
            >
              {eventCard?.location || eventCard?.locationType}
            </p>

            <p>Organizer: {eventCard?.organizer}</p>

            <p
              className={
                eventSearchStyle ? 'event-data-attendees-search' : 'event-data-attendees'
              }
            >
              {!eventCard?.attendant ? 0 : eventCard?.attendant} attendees
            </p>
          </div>
        </div>
      </Link>

      <div className='event-card-button'>
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
