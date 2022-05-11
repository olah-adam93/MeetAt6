import React, {useState, useEffect} from 'react';
import NavBarMain from './NavBarMain';

import './Header.css';

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => window.pageYOffset > 200 ? setSmall(true) : setSmall(false));
    }
  }, []);

  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src={require('./meetatsix200.49.feher.png')} alt='logo' />
      </div>
      <div className='header-navbar'>
        <NavBarMain />
      </div>
    </div>
  );
};
export default Header;
