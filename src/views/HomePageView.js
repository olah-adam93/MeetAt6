import React from 'react';
import EventContainer from '../components/HomePage/EventContainer';
import Slider from '../components/HomePage/Slider';

export default function HomePageView() {
  return (
    <div>
      Home Page
      <Slider />
      <EventContainer />
      {/*
      <Navbar />
      <Slider />
      <EventContainer />
      <Footer />
      */}
    </div>
  );
}
