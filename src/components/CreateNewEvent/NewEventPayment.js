import {useState} from 'react';

const NewEventPayment = () => {
  const [pricing, setPricing] = useState();
  const clickHandler = (e) => {
    e.preventDefault();
    if (e.target.name === 'ticket') {
      setPricing('ticket');
    }
    if (e.target.name === 'free') {
      setPricing('free');
    }
  };
  return (
    <div className='new-event-payment-container'>
      <h2>Event Pricing</h2>
      <div className='payment-type-btn-box'>
        <button type='button' name='free' onClick={clickHandler}>
          Free
        </button>
        <button type='button' name='ticket' onClick={clickHandler}>
          Ticket
        </button>
      </div>
      {pricing === 'ticket' ? (
        <div className='ticket-details'>
          <h3>Ticket</h3>
          <p>Please fill out the ticket information</p>
          {/*ha requiring akkor azt is be lehet állítani mennyi a bérlet!!! */}
          <label htmlFor='ticket-price'>Ticket Price</label>
          <input type='number' id='ticket-price' name='ticket-price' />
          <label htmlFor='valid-ticket-from'>Valid from</label>
          <input type='date' id='valid-ticket-from' name='valid-ticket-from' />
          <label htmlFor='valid-ticket-to'>Valid to</label>
          <input type='date' id='valid-ticket-to' name='valid-ticket-to' />
        </div>
      ) : null}
    </div>
  );
};
export default NewEventPayment;
