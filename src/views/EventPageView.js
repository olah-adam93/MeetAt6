import EventDetails from '../components/HomePage/EventDetails';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo';
import JoinModalView from './JoinModalView'
import './Style/EventPageView.css';
import './Style/JoinModalView.css';

const EventPageView = () => {
  return (
    <div className='event-page'>
      {/*
            image, info, details
            */}
      <EventImage />
      <EventInfo />
      <EventDetails /* details={} */ />
      <JoinModalView />
    </div>
  );
};
export default EventPageView;
