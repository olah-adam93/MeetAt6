import React from 'react';
import './InfoBox.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoBox = ({ icon, nav, text }) => {
  return (
    <div >
      <NavLink className='infoBox-card' to={nav}>
        <FontAwesomeIcon icon={icon} className='infoBox-icon' />
        <p>{text}</p>
      </NavLink>
    </div>
  );
};
export default InfoBox;
