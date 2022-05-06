import {NavLink, Link} from 'react-router-dom'

const UserNavbar = () =>{
    return(
    <div className='user-navbar'>
        <ul>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/addevent'>Create New Event</NavLink></li>
            <li><NavLink to='/myevents'>My Events</NavLink></li>
            <li><NavLink to='/chosenevents'>Chosen Events</NavLink></li>
            <li><NavLink to='/searchevents'>Search Events</NavLink></li>
            <li><NavLink to='/settings'>Settings</NavLink></li>
            <li><NavLink to='signout'>Sign out</NavLink></li>
        </ul>
    </div>)
}
export default UserNavbar