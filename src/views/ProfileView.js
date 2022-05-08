import UserNavbar from '../components/profile/UserNavbar';

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
