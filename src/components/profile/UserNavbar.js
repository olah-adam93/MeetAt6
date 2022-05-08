import {NavLink} from 'react-router-dom';
import './Style/UserNavbar.css'

const UserNavbar = () => {
  return (
    <div className='user-navbar'>
      <ul>
        <li>
          <NavLink to='/profile/chosenevents'>Chosen Events</NavLink>
        </li>
        <li>
          <NavLink to='/profile/addevent'>Create New Event</NavLink>
        </li>
        <li>
          <NavLink to='/profile/myevents'>My Events</NavLink>
        </li>
        <li>
          <NavLink to='/profile/searchevent'>Search Event</NavLink>
        </li>
        <li>
          <NavLink to='/profile/settings'>Settings</NavLink>
        </li>
        <li>
          <NavLink to='/signout'>Sign out</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default UserNavbar;
