import EventHover from '../components/HomePage/EventHover';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo'
const EventPageView = () => {
  return (
    <div className='event-page'>
      Event Page
      {/*
            image, info, details
            */}
      <EventImage />
      <EventInfo />
      <EventHover /* details={} */ />
    </div>
  );
};
export default EventPageView;
