import {NavLink, Link} from 'react-router-dom'

const UserNavbar = () =>{
    return(
    <div className='user-navbar'>
        <ul>
            <li><NavLink to=''>Events</NavLink></li>
            <li><NavLink to=''>Create New Event</NavLink></li>
            <li><NavLink to=''>My Events</NavLink></li>
            <li><NavLink to=''>Search Events</NavLink></li>
            <li><NavLink to=''>Settings</NavLink></li>
            <li><NavLink to=''>Sign out</NavLink></li>
        </ul>
    </div>)
}
export default UserNavbar