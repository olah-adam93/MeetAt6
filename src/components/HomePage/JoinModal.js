/* work in progress */

import './Styles/JoinModal.css';

const JoinModal = () => {
      return (
        <div className="joinmodal-container">
          <img className="joinmodal-image" src={'https://unsplash.it/100/100'} alt='imageOfEvent' />
          <div className="joinmodal-form">
            <div>Event title</div>
            <div>Event place: </div>
            <div>Event date: </div>
            <br />
            <form>
              <label htmlFor="email-friend">Send this event for your friend</label>
              <input type="email" id="email-friend" name="email-friend"></input>
              <button type="button">Send</button>
            </form>
            <button type="button">Close</button>
          </div>
        </div>
      )
}

export default JoinModal