import EventDetails from '../components/HomePage/EventDetails';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo';
import JoinModalView from '../components/HomePage/JoinModal'
import './Style/EventPageView.css';


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
