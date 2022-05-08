import React from 'react';
import EventContainer from '../components/HomePage/EventContainer';
import Slider from '../components/HomePage/Slider';

export default function HomePageView() {
  return (
    <div>
      Home Page
      <Slider />
      <EventContainer containerName={'Legfrissebb események'} />
      <EventContainer containerName={'Kiemelt események'} />
      {/*
      <Navbar />
      <Slider />
      <EventContainer />
      <Footer />
      */}
    </div>
  );
}
