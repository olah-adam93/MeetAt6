/* work in progress */

import './Styles/JoinModal.css';

import {createUserData} from '../../services/crud';
import { auth } from '../../config/firebase';

const JoinModal = ({clickHandler, eventKey, eventValue}) => {
  const user = auth.currentUser;

  console.log(eventKey, eventValue, user.uid);

  const joinHandler = (event) => {
    console.log('click');
    createUserData(`eventAttendees/${eventKey}`, {
      [user.uid]: user.displayName,
    })
    .then(()=> {

      console.log('success');
    })
  }

  return (
    <div className='joinmodal-container'>
      <div className='joinmodal-image-container'>
        <img
          className='joinmodal-image'
          src={eventValue?.imageUrl}
          alt={eventValue?.title}
        />
      </div>
      <div className='joinmodal-others-container'>
        <div className='joinmodal-details'>
          <h3 className='joinmodal-details-title'>Event title: {eventValue?.title}</h3>
          <div className='joinmodal-details-place'>
            Event place: {eventValue?.location}
          </div>
          <div className='joinmodal-details-date'>Event date: </div>
          <br />
          <form className='joinmodal-form'>
            <label className='joinmodal-form-label' htmlFor='joinmodal-email-friend'>
              Send this event for your friend
            </label>
            <input
              className='joinmodal-form-input'
              type='email'
              id='joinmodal-email-friend'
              name='joinmodal-email-friend'
            ></input>
            <button type='button' className='joinmodal-form-button'>
              Send
            </button>
          </form>
          <div className='joinmodal-bottom-buttons'>
            <button
              className='joinmodal-close-button'
              onClick={clickHandler}
              type='button'
            >
              Close
            </button>
            <button className='joinmodal-join-button' type='button' onClick={joinHandler}>
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
