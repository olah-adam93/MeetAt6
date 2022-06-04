import React from 'react';

/* Style */
import './Styles/EventImage.css'

/* Image */
import eventImagePlaceholder from '../../others/logo/logo7.3.png';

const EventImage = ({eventInfo}) => {
  return (
    <>
    {eventInfo &&
      <div className='event-image-container'>
        <img src={eventInfo?.imageUrl ? eventInfo?.imageUrl : eventImagePlaceholder} alt={eventInfo?.title} />
      </div>
    }
    </>
  );
};
export default EventImage;
