import React from 'react';
import InfoBox from '../others/InfoBox';
import '../others/InfoBox.css';
import {
  faMagnifyingGlass,
  faCirclePlus,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

export default function ThankYouView() {
  return (
    <div className='infoBox-container'>
      <InfoBox icon={faMagnifyingGlass} />
      <InfoBox icon={faCirclePlus} />
      <InfoBox icon={faAddressCard} />
    </div>
  );
}
