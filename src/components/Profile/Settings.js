import React from 'react';
import { useState } from 'react';
import './Style/Settings.css';
import SettingsImage from './SettingsImage';

const Settings = () => {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const clickEditHandler = (e) => {
    if (e.target.name === 'name') {
      setEditName(true);
      setEditEmail(false);
    } else if (e.target.name === 'email') {
      setEditName(false);
      setEditEmail(true);
    } else {
      setEditName(false);
      setEditEmail(false);
    }
  };

  const clickResetHandler = (e) => {
    if (e.target.name === 'name') {
      setEditName(false);
    } else if (e.target.name === 'email') {
      setEditEmail(false);
    }
  };

  return (
    <div className='settings-form-container'>
      <h1>Account Information</h1>
      <form className='settings-form'>
        <div className='settings-name'>
          <label htmlFor='name' className='label-form label-name'>
            Name
          </label>
          {editName && (
            <input
              type='text'
              className='input-name'
              id='name'
              placeholder='Elon Musk'
              required
            />
          )}
          <span>
            <button
              type='button'
              name='name'
              className='edit-button'
              onClick={clickEditHandler}
              onDoubleClick={clickResetHandler}
            >
              edit
            </button>
          </span>
        </div>
        <div className='settings-email'>
          <label htmlFor='email' className='label-form label-email'>
            Email
          </label>
          {editEmail && (
            <input
              type='email'
              className='input-email'
              id='email'
              placeholder='elon.musk@tesla.com'
              required
            />
          )}
          <span>
            <button
              type='button'
              name='email'
              className='edit-button'
              onClick={clickEditHandler}
              onDoubleClick={clickResetHandler}
            >
              edit
            </button>
          </span>
        </div>
        <div className='settings-image-container'>
          <SettingsImage />
        </div>
        <div className='settings-location'>
          <label htmlFor='map' className='label-form label-location'>
            Location - Map
          </label>
        </div>
        <div className='settings-date'>
          <label htmlFor='date' className='label-form label-date'>
            Birthday
          </label>
          <input type='date' id='date' className='input-date' />
        </div>
        <div className='settings-gender'>
          <label htmlFor='gender' className='label-form label-gender'>
            Gender
          </label>
          <select className='select-gender' id='gender'>
            <option selected>Open this select menu</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='other'>None of these choices</option>
          </select>
        </div>
        <div className='settings-classification'>
          <div className='classification-personal'>
            <input name='form-radio-input' type='radio' id='personal' value='personal' />
            <label className='form-radio-label' htmlFor='personal'>
              Personal
            </label>
          </div>
          <div className='classification-organization'>
            <input
              name='form-radio-input'
              type='radio'
              id='organization'
              value='organization'
            />
            <label className='form-radio-label' htmlFor='organization'>
              Organization
            </label>
          </div>
        </div>
        <button type='submit' className='save-button'>
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;
