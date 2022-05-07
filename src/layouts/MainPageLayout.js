import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainPageLayout = () => {
  return (
    <div className='layout-container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPageLayout;
