import './Style/ContactsView.css';
import {useState} from 'react';
import React from 'react';
import {createNewData} from '../services/crud';
const ContactView = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [required, setRequired] = useState('');
  const changeContactHandler = (e) => {
    setContactInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  const submitContactHandler = (e) => {
    e.preventDefault();

    if (
      !contactInfo.email ||
      !contactInfo.contactName ||
      !contactInfo.contactMessage ||
      !contactInfo.theme ||
      !contactInfo.title
    ) {
      setRequired('requiredInformation');
    } else {
      console.log(contactInfo);
      setRequired('');
      const currentDate = new Date(Date.now()).toUTCString().slice(-24, -4);
      createNewData(`contactMessages/${contactInfo.theme}`, {
        ...contactInfo,
        createdDate: currentDate,
      });
    }
    setContactInfo({});
  };
  return (
    <div className='contact-container'>
      <h2>Contact Information</h2>
      <div className='contact-details'>
        <div className='contact-body-container'>
          <h3 className='contact-title'>Contacts</h3>
          <div>
            <p className='contact-admin-paragraph'>
              Urbán Eszter <br /> Email: admin@admin.hu
            </p>
            <p className='contact-admin-paragraph'>
              Iglódi Gergő <br /> Email: admin2@admin.hu
            </p>
            <p className='contact-admin-paragraph'>
              Derzsi Szabolcs <br /> Email: admin3@admin.hu
            </p>
            <p className='contact-admin-paragraph'>
              Oláh Ádám <br /> Email: admin4@admin.hu
            </p>
            <p className='contact-admin-paragraph'>
              Szőke Ákos <br /> Email: admin5@admin.hu
            </p>
            <p className='contact-admin-paragraph'>
              Szőnyi Ádám <br /> Email: admin6@admin.hu
            </p>
          </div>
        </div>
        <div className='contact-us'>
          <h3 className='contact-title'>Contact us!</h3>
          <form onSubmit={submitContactHandler} className='contact-us-form'>
            <input
              type='text'
              name='contactName'
              placeholder='Please give us a contact name'
              onChange={changeContactHandler}
              className={contactInfo.contactName ? null : required}
              defaultValue={contactInfo?.contactName}
            />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              onChange={changeContactHandler}
              className={contactInfo.email ? null : required}
              defaultValue={contactInfo?.email}
            />
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Title'
              onChange={changeContactHandler}
              className={contactInfo.title ? null : required}
              defaultValue={contactInfo?.title}
            />
            <select
              onChange={changeContactHandler}
              name='theme'
              className={contactInfo.theme ? null : required}
              defaultValue={contactInfo?.theme}
            >
              <option value=''>Please choose a theme</option>
              <option value='problem'>Problem with the webpage</option>
              <option value='question'>Have a question</option>
            </select>
            <textarea
              placeholder='Please write here your message.'
              name='contactMessage'
              onChange={changeContactHandler}
              className={contactInfo.contactMessage ? null : required}
              defaultValue={contactInfo?.contactMessage}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactView;
