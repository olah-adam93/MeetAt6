import EventDetails from '../components/HomePage/EventDetails';
import EventImage from '../components/HomePage/EventImage';
import EventInfo from '../components/HomePage/EventInfo';
import './Style/EventPageView.css';

import { useParams } from 'react-router-dom';


const EventPageView = () => {
  const event_page = useParams();

  return (
    <div className='event-page'>
      {/*
            image, info, details
            */}
      <EventImage />
      <EventInfo />
      <EventDetails /* details={} */ />
      
    </div>
  );
};
export default EventPageView;
