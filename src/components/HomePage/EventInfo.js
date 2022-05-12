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
        <div className="joinmodal-image-container">
          <img className="joinmodal-image" src={'https://unsplash.it/100/100'} alt='imageOfEvent' />
        </div>
          <div className="joinmodal-others-container">
            <div className="joinmodal-details">
              <h3 className="joinmodal-details-title">Event title</h3>
              <div className="joinmodal-details-place">Event place: </div>
              <div className="joinmodal-details-date">Event date: </div>
              <br />
              <form className="joinmodal-form">
                 <label className="joinmodal-form-label" htmlFor="joinmodal-email-friend">Send this event for your friend</label>
                 <input className="joinmodal-form-input" type="email" id="joinmodal-email-friend" name="joinmodal-email-friend"></input>
                 <button type="button" className="joinmodal-form-button">Send</button>
               </form>
              <div lassName="joinmodal-bottom-buttons">
                <button className="joinmodal-close-button" onClick={clickHandler} type="button">Close</button>
                <button className="joinmodal-join-button" type="button">Join</button>
              </div>
          </div>
        </div>
      </>}
      
    />}
    </div>
        );
};

export default EventInfo;
