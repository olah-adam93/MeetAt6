import React from 'react';
import './InfoBox.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoBox = ({ icon, nav }) => {
  return (
    <div className='infoBox-card'>
      <NavLink to={nav}>
        <FontAwesomeIcon icon={icon} className='infoBox-icon' />
      </NavLink>
    </div>
  );
};
export default InfoBox;
