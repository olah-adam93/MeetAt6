import {Outlet} from 'react-router-dom';
import UserNavbar from '../components/Profile/UserNavbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const UserMainPageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserMainPageLayout;
