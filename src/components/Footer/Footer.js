import {NavLink} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-nav'>
      <ul>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/FAQ'>FAQ</NavLink></li>
        <li><NavLink to='/privacy'>Privacy</NavLink></li>
      </ul>
    </div>
  );
};
export default Footer;
