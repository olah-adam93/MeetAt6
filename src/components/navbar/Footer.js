import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-nav'>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/FAQ'>FAQ</NavLink>
            <NavLink to='/privacy'>Privacy</NavLink>
        </div>)
}
export default Footer