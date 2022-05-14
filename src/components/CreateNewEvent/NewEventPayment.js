import {data} from 'dom7';
import {useState} from 'react';

const NewEventPayment = ({setData, data}) => {
  
  const changeHandler = (e) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.value}));
    
  };

  return (
    <div className='new-event-payment-container'>
      <h2>Event Pricing</h2>
      <div className='payment-type-btn-box'>
        <h2>Currency</h2>

        <label htmlFor='free'>Free</label>
        <input
          type='radio'
          name='paymentType'
          value='free'
          id='free'
          onChange={changeHandler}
          
          defaultChecked = { data?.paymentType === 'free'}
        />
        <label htmlFor='ticket'>Ticket</label>
        <input
          type='radio'
          name='paymentType'
          value='ticket'
          onChange={changeHandler}
          id='ticket'
          defaultChecked = {data?.paymentType ==='ticket'}
        />
        {/* <button type='button' name='free' onClick={clickHandler}>
          Free
        </button>
        <button type='button' name='ticket' onClick={clickHandler}>
          Ticket
        </button> */}
      </div>
      {data?.paymentType ==='ticket' ? (
        <div className='ticket-details'>
          <h3>Ticket</h3>
          <p>Please fill out the ticket information</p>
          {/*ha requiring akkor azt is be lehet állítani mennyi a bérlet!!! */}
          <label htmlFor='ticket-price'>Ticket Price</label>
          <input
            type='number'
            id='ticket-price'
            name='ticketPrice'
            onChange={changeHandler}
            value={data?.ticketPrice}
          />
          <label htmlFor='ticket-currency'>Ticket Currency</label>
          <select
            name='ticketCurrency'
            id='ticket-currency'
            onChange={changeHandler}
            value={data?.ticketCurrency}
          >
            <option value='huf'>HUF</option>
            <option value='eur'>EUR</option>
            <option value='usd'>USD</option>
          </select>
          <label htmlFor='valid-ticket-from'>Valid from</label>
          <input
            type='date'
            id='valid-ticket-from'
            name='validTicketFrom'
            onChange={changeHandler}
            value={data?.validTicketFrom}
          />
          <label htmlFor='valid-ticket-to'>Valid to</label>
          <input
            type='date'
            id='valid-ticket-to'
            name='validTicketTo'
            onChange={changeHandler}
            value={data?.validTicketTo}
          />
        </div>
      ) : null}
    </div>
  );
};
export default NewEventPayment;
