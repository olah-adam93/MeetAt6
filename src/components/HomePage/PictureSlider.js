/* Components */
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper';

/* Style */
import '../HomePage/Styles/PictureSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

/* Images */
import dinner from '../../others/images/dinner-unsplash.jpg'
import meeting from '../../others/images/meeting-unsplash.jpg'
import festival from '../../others/images/festival-unsplash.jpg'
import game from '../../others/images/game-unsplash.jpg'
import hiking from '../../others/images/hiking-unsplash.jpg'
import team from '../../others/images/team-unsplash.jpg'

const PictureSlider = () => {
  return (
    <div className='image-slider-container'>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 5000 }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        className='swiper'
      >
        <SwiperSlide><img src={hiking} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={game} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={dinner} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={meeting} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={festival} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={team} alt="Logo" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PictureSlider;
