import React from 'react';
import NavBarMain from './NavBarMain';

import './Header.css';

const Header = () => {
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
