import UserNavbar from '../components/Profile/UserNavbar';
import EventContainer from '../components/HomePage/EventContainer';
import './Style/ProfileView.css';
import GaleryContainer from '../components/Profile/GaleryContainer';
const ProfileView = () => {
  return (
    <div className='profile'>
      <div className='profile-head'>
        <div>
          <UserNavbar />
        </div>
        <div>
          <h1>Hi name{/* your name */}!</h1>
          <img
            className='avatar'
            src='http://placekitten.com/200/200'
            alt='username'
          />
        </div>
        <section>
          <h3>Your Informaiton:</h3>
          <p>Email:</p>
          <p>Tel:</p>
          <p>Interest:</p>
          <p>Location:</p>
        </section>
      </div>
      <div className='profile-main'>
        <div className='user-head'>
          <div className='user-data'>
            <section>
              <p>
                About me: Hi I'm .... Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. In sollicitudin, ex nec pharetra congue, nulla sem cursus mi,
                imperdiet tincidunt leo sapien at justo. Vestibulum dictum finibus enim,
                in sollicitudin neque malesuada eget. Nullam cursus mi sit amet mauris
                auctor, ornare faucibus dui vehicula. Proin blandit mauris sit amet
                consectetur consectetur. Duis sed sodales dui, sed fermentum erat. Morbi
                nec dui eu augue tempor vehicula. Nam interdum nibh ultricies dapibus
                bibendum. Aliquam fringilla sollicitudin facilisis. Donec nibh justo,
                posuere sit amet dignissim eu, feugiat non nisi. Vivamus consectetur, dui
                a fringilla commodo, est urna feugiat nibh, ac pellentesque orci eros a
                leo.
              </p>
            </section>
          </div>
          <div className='events'>
            <div className='events-box'>
              <EventContainer containerName={'Events you attend'} />
            </div>
            <div className='events-box'>
              <EventContainer containerName={'Events you may like'} />
            </div>
          </div>
          <div className='user-galery'>
            <GaleryContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileView;
