import UserNavbar from '../components/Profile/UserNavbar';
import EventContainer from '../components/HomePage/EventContainer';
import './Style/ProfileView.css';
import GaleryContainer from '../components/Profile/GaleryContainer';
import { useContext, useEffect, useState } from 'react';
import { getAuth } from '@firebase/auth';
import { readData } from '../services/crud';
import { AuthContext } from '../components/Authentication/AuthContext';

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
        <div>
          <UserNavbar />
        </div>
        <div>
          <h1>Hi {userData.userLog.user.displayName}!</h1>
          <img
            className='avatar'
            src={userData.userLog?.user.photoURL}
            alt={userData.userLog.user.displayName}
          />
        </div>
        <section>
          <h3>Your Informaiton: </h3>
          <p>Email: {userData.userLog.user.email}</p>
          <p>Tel: {userData.userLog.userDetails?.telephone}</p>
          <p>Birthday: {userData.userLog.userDetails?.birthday}</p>
          <p>Interest: {userData.userLog.userDetails?.interest}</p>
          <p>Location: {userData.userLog.userDetails?.location}</p>
        </section>
      </div>
      <div className='profile-main'>
        <div className='user-head'>
          <div className='user-data'>
            <section>
              <p>{userData.userLog.userDetails?.userIntroduction}</p>
            </section>
          </div>
          <div className='events'>
            <div className='events-box'>
              <EventContainer
                containerName={'Events you attend'}
                searchKey={'paymentType'}
                searchValue={'free'}
              />
            </div>
            <div className='events-box'>
              <EventContainer
                containerName={'Events you may like'}
                searchKey={`uid`}
                searchValue={`${userData.userLog.user.uid}`}
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
