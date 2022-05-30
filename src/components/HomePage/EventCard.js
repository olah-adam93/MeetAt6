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
    <Link className={eventSearchStyle ? 'event-card-container-search' : 'event-card-container'} to={`/eventpage/${eventId}`}>
      <div className={eventSearchStyle ? 'event-card-search' : 'event-card'}>
        <div
          className={
            eventSearchStyle
              ? 'event-picture-container-search'
              : 'event-picture-container'
          }
        >
          <Link
            className={
              eventSearchStyle
                ? 'event-picture-img-link-search'
                : 'event-picture-img-link'
            }
            to={`/eventpage/${eventId}`}
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
          </Link>
        </div>

        <div className={eventSearchStyle ? 'event-data-search' : 'event-data'}>
          <p className={eventSearchStyle ? 'event-data-date-search' : 'event-data-date'}>
            {eventCard?.eventStarts + ' - ' + eventCard?.startTime}
          </p>

          <Link
            className={eventSearchStyle ? 'event-data-title-search' : 'event-data-title'}
            to={`/eventpage/${eventId}`}
          >
            <p>{eventCard?.title}</p>
          </Link>

          <p>Location: {eventCard?.location || eventCard?.locationType}</p>

          <p>Organizer: {eventCard?.organizer}</p>

          <p>Attendant limit: {eventCard?.attendant}</p>
        </div>

        <div className={eventSearchStyle ? 'event-button-search' : 'event-button'}>
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
    </Link>
  );
};
export default EventCard;
