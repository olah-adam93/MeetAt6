import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const MainPageLayout = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <Outlet />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainPageLayout;
