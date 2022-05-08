import React from 'react';


const EventInfo = () => {
  return (
    <div className='eventinfo-container'>
      <div className='eventinfo-details'>Event name: {/* ide lesz behúzva a név*/}</div>
      <div className='eventinfo-details'>Event place: {/* ide lesz behúzva a helység*/}</div>
      <div className='eventinfo-details'>Event date: {/* ide lesz behúzva a dátum*/}</div>

      <button className='eventinfo-join-button'>Join</button>
    </div>
        );
};

export default EventInfo;
