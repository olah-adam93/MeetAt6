import React from 'react';
import EventContainer from '../components/HomePage/EventContainer';
import Slider from '../components/HomePage/Slider';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default function HomePageView() {
  let [newestEventCardIndex, setNewestEventCardIndex] = useState(0);
  let [payedEventCardIndex, setPayedEventCardIndex] = useState(0);
  const [parentDb, setParentDb] = useState([]);
  const newestRightEventHandler = () => {
    if (newestEventCardIndex <= parentDb.length - 1) {
      setNewestEventCardIndex(++newestEventCardIndex);
      console.log(newestEventCardIndex);
    } else {
      setNewestEventCardIndex(parentDb.length - 1);
    }
  };
  const newestLeftEventHandler = () => {
    if (newestEventCardIndex > 0) {
      setNewestEventCardIndex(--newestEventCardIndex);
      console.log(newestEventCardIndex);
    } else {
      setNewestEventCardIndex(0);
    }
  };
  const payedRightEventHandler = () => {
    if (payedEventCardIndex <= parentDb.length - 1) {
      setPayedEventCardIndex(++payedEventCardIndex);
      console.log(payedEventCardIndex);
    } else {
      setPayedEventCardIndex(parentDb.length - 1);
    }
  };
  const payedLeftEventHandler = () => {
    if (payedEventCardIndex > 0) {
      setPayedEventCardIndex(--payedEventCardIndex);
      console.log(payedEventCardIndex);
    } else {
      setPayedEventCardIndex(0);
    }
  };
  return (
    <div>
      Home Page
      <Slider />
      <EventContainer
        containerName={'Legfrissebb események'}
        eventCardIndex={newestEventCardIndex}
        setParentDb={setParentDb}
      />
      <FontAwesomeIcon icon={faAngleLeft} onClick={newestLeftEventHandler} />
      <FontAwesomeIcon icon={faAngleRight} onClick={newestRightEventHandler} />
      <EventContainer
        containerName={'Kiemelt események'}
        eventCardIndex={payedEventCardIndex}
        setParentDb={setParentDb}
      />
      <FontAwesomeIcon icon={faAngleLeft} onClick={payedLeftEventHandler} />
      <FontAwesomeIcon icon={faAngleRight} onClick={payedRightEventHandler} />
    </div>
  );
}
