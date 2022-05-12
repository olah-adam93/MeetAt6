import React, {useState} from 'react';
import JoinModal from './JoinModal'


const EventInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const clickHandler = () => {
    setIsOpen(!isOpen);
  }
  


  return (
    <div className='eventinfo-container'>
      <div className='eventinfo-details'>Event name: {/* ide lesz behúzva a név*/}</div>
      <div className='eventinfo-details'>Event place: {/* ide lesz behúzva a helység*/}</div>
      <div className='eventinfo-details'>Event date: {/* ide lesz behúzva a dátum*/}</div>

      <button onClick={clickHandler} className='eventinfo-join-button'>Join</button>

      {isOpen && <JoinModal
      content={<>
        <img className="joinmodal-image" src={'https://unsplash.it/100/100'} alt='imageOfEvent' />
          <div className="joinmodal-form">
            <h3>Event title</h3>
            <div>Event place: </div>
            <div>Event date: </div>
            <br />
            <form>
              <label htmlFor="joinmodal-email-friend">Send this event for your friend</label>
              <input type="email" id="joinmodal-email-friend" name="joinmodal-email-friend"></input>
              <button type="button" className="joinmodal-send-button">Send</button>
            </form>
            <button className="joinmodal-close-button" onClick={clickHandler} type="button">Close</button>
          </div>
      </>}
      
    />}
    </div>
        );
};

export default EventInfo;
