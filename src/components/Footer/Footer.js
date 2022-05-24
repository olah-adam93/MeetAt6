import {NavLink} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-nav'>
      <div className='footer-logo'>
        <img
          className={`footer-img`}
          src={require('./meetatsix200.49.feher.png')}
          alt='logo'
        />
      </div>
      <div className='footer-links'>
        <ul>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/FAQ'>FAQ</NavLink>
          </li>
          <li>
            <NavLink to='/privacy'>Privacy</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
