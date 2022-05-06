import EventHover from '../components/HomePage/EventHover';
import EventImage from '../components/HomePage/EventImage';

const EventPageView = () => {
  return (
    <div className='event-page'>
      Event Page
      {/*
            image, info, details
            */}
      <EventImage />
      <EventHover /* details={} */ />
    </div>
  );
};
export default EventPageView;
