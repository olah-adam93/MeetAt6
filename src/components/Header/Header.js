import React, {useState, useEffect} from 'react';
import NavBarMain from './NavBarMain';
import {NavLink} from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const scrollCallback = () =>
      window.pageYOffset > 100 ? setSmall(true) : setSmall(false);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollCallback);
    }
    return () => window.removeEventListener('scroll', scrollCallback);
  }, []);

  return (
    <div className={`header-container ${small ? 'header-small' : ''}`}>
      <div className='header-logo'>
        <NavLink to='/'>
          <img
            className={`header-img ${small ? 'img-small' : ''}`}
            src={require('./meetatsix100.406.szines2.png')}
            alt='logo'
          />
        </NavLink>
      </div>
      <div className='header-navbar'>
        <NavBarMain />
      </div>
    </div>
  );
};
export default Header;
