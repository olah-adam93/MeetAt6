import React from 'react';

import './Styles/EventImage.css'

const EventImage = ({eventInfo}) => {
  console.log(eventInfo);
  return (
    <>
    {eventInfo &&
      <div className='event-image-container'>
        <img className="event-image" src={eventInfo?.imageUrl} alt={eventInfo?.title} />
      </div>
    }
    </>
  );
};
export default EventImage;
