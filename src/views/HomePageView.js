import React from 'react';
import EventContainer from '../components/HomePage/EventContainer';
import Slider from '../components/HomePage/Slider';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { EventDbContext } from '../components/EventDbContext/EventDbContext';

export default function HomePageView() {
  const eventDb = useContext(EventDbContext);
  return (
    <div>
      Home Page
      <Slider />
      <EventContainer
        containerName={'Legfrissebb események'}
        searchKey={'paymentType'}
        searchValue={'free'}
      />
      <FontAwesomeIcon icon={faAngleLeft} />
      <FontAwesomeIcon icon={faAngleRight} />
      <EventContainer
        containerName={'Kiemelt események'}
        searchKey={'paymentType'}
        searchValue={'ticket'}
      />
      <FontAwesomeIcon icon={faAngleLeft} />
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
}
