/* Style */
import './Styles/EventSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {useEffect, useState, useContext} from 'react';

/* Database Context */
import {EventDbContext} from '../EventDbContext/EventDbContext';

/* Components */
import EventCard from './EventCard';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';


export default function EventSlider({
  containerName,
  searchKey,
  searchValue,
}) {
  const eventDb = useContext(EventDbContext);
  const [eventsCard, setEventsCard] = useState([]);

  useEffect(() => {
    const filteredArray = eventDb.db.filter((event) => {
      const value = event[1];
      return value?.[searchKey] === searchValue;
    });
    setEventsCard(filteredArray);
  }, [eventDb.db, searchKey, searchValue]);

  return (
    <>
      <h2 className='slider-container-name'>{containerName}</h2>
      <br />
        <div className='slider-container'>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='swiper'
          >
            {eventsCard.map((event) => {
              return (
                <SwiperSlide key={`card_${event[0]}`}>
                  <EventCard
                    eventCard={event[1]}
                    eventId={event[0]}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
    </>
  );
}
