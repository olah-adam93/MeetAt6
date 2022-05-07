import UserNavbar from '../components/Profile/UserNavbar';
import EventContainer from '../components/HomePage/EventContainer'
import './Style/ProfileView.css'
const ProfileView = () => {
  return (
    <div className='profile'>
      <div className='profile-head'>
        <div>
          <UserNavbar />
        </div>
        <div>
            <h1>Hi name{/* your name */}!</h1>
            <img className='avatar' src="http://placekitten.com/200/200" alt="profile-picture"/>
        </div>
      </div>
      <div className='profile-main'>
        <div className="user-head">
          <div className='user-data'>
            <section>
              <p>Email:</p>
              <p>Tel:</p>
              <p>Interest:</p>
              <p>Location:</p>
            </section>
            <section>
              <p>About me: Hi I'm ....</p>
            </section>
          </div>
          <div className='events' >
            <EventContainer />
          </div>
          <div className='user-galery'>
            Galery???
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileView;
