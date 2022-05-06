import UserNavbar from '../components/Profile/UserNavbar';

const ProfileView = () => {
  return (
    <div className='profile'>
      <div className='profile-navbar'>
        <UserNavbar />
      </div>
      <div className='profile-main'>Profile oldal</div>
    </div>
  );
};
export default ProfileView;
