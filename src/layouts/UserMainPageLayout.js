import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const UserMainPageLayout = ({userLog}) => {
  return (
    <>
      {Object.values(userLog)?.length && (
        <div className='layout-container'>
          <Header />
          <div className='layout-inner-container'>
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default UserMainPageLayout;
