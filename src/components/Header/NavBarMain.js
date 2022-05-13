import { NavLink } from 'react-router-dom';
import './Header.css';
import { createContext, useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { auth } from '../../config/firebase';

const NavBarMain = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className='main-navbar'>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About us</NavLink>
        </li>
        <li>
          <NavLink to='/events'>Events</NavLink>
        </li>
        {authContext.user ? (
          <>
            <li>
              <NavLink to='/profile'>Profile</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/signin'>Sign In</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>Sign Up</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default NavBarMain;
