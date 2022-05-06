import React from 'react';
import NavBarMain from './NavBarMain';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <img src={'https://unsplash.it/100/100'} alt='logo' />
            </div>
            <div className='header-navbar'>
                <NavBarMain />
            </div>
        </div>)
}
export default Header;