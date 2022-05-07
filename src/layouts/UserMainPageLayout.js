import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const UserMainPageLayout = () => {
  return (
    <div className='layout-container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserMainPageLayout;
