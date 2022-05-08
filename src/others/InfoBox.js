import React from 'react';
import './Infobox.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoBox = (props) => {
  return (
    <div className='infoBox-container'>
      <div className='infoBox-icon'>
        <FontAwesomeIcon icon={''} />
      </div>
      <div className='InfoBox-link'>
        <NavLink to={''}>{''}</NavLink>
      </div>
    </div>
  );
};
export default InfoBox;
