import { NavLink } from 'react-router-dom';
import './Header.css';

const NavBarMain = () => {
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
        <li>
          <NavLink to='/signin'>Sign In</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBarMain;
