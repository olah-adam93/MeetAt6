import {Outlet, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SigninView from '../views/SignInView';


const UserMainPageLayout = ({userLog}) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(Object.values(userLog)?.length !== 0) {
  //     navigate('/signin');
  //   }
  // }, [navigate])

  return (
    <>
      
        <div className='layout-container'>
          <Header />
          <div className='layout-inner-container'>
            {Object.values(userLog)?.length ? <Outlet /> : <SigninView />}
          </div>
          <Footer />
        </div>
      
    </>
  );
};

export default UserMainPageLayout;
