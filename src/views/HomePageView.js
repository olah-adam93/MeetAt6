/* Components */
import PictureSlider from '../components/HomePage/PictureSlider';
import EventSlider from '../components/HomePage/EventSlider';

/* Style */
import './Style/HomePageView.css';


const HomePageView = () => {
  return (
    <div>
      <PictureSlider />
      {/* <div className='separator'></div> */}
      <EventSlider
        containerName={'Newest events'}
        searchKey={'paymentType'}
        searchValue={'free'}
      />
      {/* <div className='separator'></div> */}
      <div className='separator'></div>
      <EventSlider
        containerName={'Premium events'}
        searchKey={'paymentType'}
        searchValue={'ticket'}
      />
      <div className='separator'></div>
      <div className='separator'></div>
      <div className='separator'></div>
    </div>
  );
};

export default HomePageView;
