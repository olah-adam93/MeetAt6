/* Style */
import './Style/ProfileView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
/* Components */
import {useContext, useEffect, useState} from 'react';
import UserNavbar from '../components/Profile/UserNavbar';
import EventContainer from '../components/HomePage/EventContainer';
import GaleryContainer from '../components/Profile/GaleryContainer';
import EventSlider from '../components/HomePage/EventSlider';

/* Firebase */
import {getAuth} from '@firebase/auth';

/* CRUD */
import {readData} from '../services/crud';

/* Auth Context */
import {AuthContext} from '../components/Authentication/AuthContext';

const ProfileView = () => {
  const userData = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({});
  const auth = getAuth();
  const user = auth.currentUser;
  /* useEffect(()=>{
    readData('userDetails', user.uid)
    .then(snapshot => setUserDetails(snapshot.val()))
    console.log(userData.userLog.user.uid)
  }, [user.uid userData.userLog.user]) */

  return (
    <div className='profile'>
      <div className='profile-head'>
        {/* <div>
          <UserNavbar />
        </div> */}
        <div>
          {/* <h1>Hi {userData.userLog.user.displayName}!</h1> */}
          <img
            className='avatar'
            src={
              userData.userLog?.user.photoURL ||
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt={userData.userLog.user.displayName}
          />
        </div>
        <div className='profile-head-information'>
          <div className='user-head-data'>
            <section>
              <p><FontAwesomeIcon icon={faPaperPlane} className="plane-icon"/>{userData.userLog.user.email}</p>
              {/* <p>{userData.userLog.userDetails?.birthday}</p> */}
              <p><FontAwesomeIcon icon={faLocationDot} className="plane-icon"/>{userData.userLog.userDetails?.location}</p>
            </section>
            <section>
              <p>{userData.userLog.userDetails?.userIntroduction}</p>
            </section>
          </div>
        </div>
      </div>
      <div className='profile-main'>
        <div className='user-head'>
          <div className='events'>
            <div className='events-box'>
              <EventSlider
                containerName={'Free Events'}
                searchKey={'paymentType'}
                searchValue={'free'}
              />
            </div>
            <div className='events-box'>
              <EventSlider
                containerName={'Online Events'}
                searchKey={`locationType`}
                searchValue={`online`}
              />
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
