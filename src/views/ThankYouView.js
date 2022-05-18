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
      <InfoBox icon={faMagnifyingGlass} nav={'/profile/searchevent'}/>
      <InfoBox icon={faCirclePlus} nav={'/profile/addevent'}/>
      <InfoBox icon={faAddressCard} nav={'/profile'}/>
    </div>
  );
}
