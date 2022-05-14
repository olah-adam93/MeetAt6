import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import './Style/Settings.css';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import SettingsImage from './SettingsImage';
import { updateData } from '../../services/crud';

const Settings = ({ setData, data }) => {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [inputValue, setInputValue] = useState({
    birthday: '',
    gender: '',
    location: '',
    profilePhoto: '',
    organization: '',
  });
  const [authInputValue, setAuthInputValue] = useState({
    name: '',
    email: '',
  });

  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  // Edit button
  /*
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
  }; */

  const authChangeHandler = (e) => {
    setAuthInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeHandler = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputValue);
  };

  //Name
  /* if (user.uid) {
    updateProfile(user, {
      displayName: ,
    })
      .then(() => {
        console.log(user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Email
  if (user.uid) {
    updateEmail(user, '')
      .then(() => {
        console.log('');
      })
      .catch((error) => {
        console.log(error);
      }); */

  const updateProfileFn = useCallback(() => {
    updateProfile(user, {
      displayName: authInputValue.name,
    })
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const authSubmitHandler = (e) => {
    e.preventDefault();

    updateProfileFn();
    if (e.target.name === 'name') {
      // updateProfileFn();
    }

    /* if (e.target.name === 'email') {
      updateEmail(user, authInputValue.email)
        .then(() => {
          console.log(authInputValue.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  */
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    updateData('userDetails', user.uid, {
      birthday: inputValue?.birthday,
      gender: inputValue?.gender,
      location: inputValue?.location,
      profilePhoto: inputValue?.profilePhoto,
      organization: inputValue?.organization,
    });

    console.log(inputValue);
  };

  return (
    <div className='settings-form-container'>
      <h1>Account Information</h1>
      <form action='' className='settings-form' onSubmit={authSubmitHandler}>
        {/*Name*/}
        <div className='settings-name'>
          <label htmlFor='name' className='label-form label-name'>
            Name
          </label>
          {
            <input
              type='text'
              className='input-name'
              name='name'
              id='name'
              placeholder='Elon Musk'
              required
              onChange={authChangeHandler}
            />
          }
          <span>
            <button
              type='button'
              name='name-btn'
              className='edit-button'
              //onClick={clickEditHandler}
              //onDoubleClick={clickResetHandler}
            >
              edit
            </button>
          </span>
        </div>
        {/*Email*/}
        <div className='settings-email'>
          <label htmlFor='email' className='label-form label-email'>
            Email
          </label>
          {
            <input
              type='email'
              className='input-email'
              name='email'
              id='email'
              placeholder='elon.musk@tesla.com'
              required
              onChange={authChangeHandler}
            />
          }
          <span>
            <button
              type='button'
              name='email'
              className='edit-button'
              //onClick={clickEditHandler}
              //onDoubleClick={clickResetHandler}
            >
              edit
            </button>
          </span>
        </div>
        <button type='submit' className='save-button'>
          Save
        </button>
      </form>
      <form action='' className='settings-form' onSubmit={formSubmitHandler}>
        {/*Image*/}
        <div className='settings-image-container'>
          <SettingsImage />
        </div>
        {/*Location*/}
        <div className='settings-location'>
          <label htmlFor='map' className='label-form label-location'>
            Location - Map
          </label>
        </div>
        {/*Birthday*/}
        <div className='settings-date'>
          <label htmlFor='date' className='label-form label-date'>
            Birthday
          </label>
          <input
            type='date'
            id='date'
            name='birthday'
            className='input-date'
            onChange={changeHandler}
          />
        </div>
        {/*Gender*/}
        <div className='settings-gender'>
          <label htmlFor='gender' className='label-form label-gender'>
            Gender
          </label>
          <select
            className='select-gender'
            name='gender'
            id='gender'
            onChange={changeHandler}
            value={inputValue?.gender}
          >
            <option value='0'>Open this select menu</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='other'>None of these choices</option>
          </select>
        </div>
        <div className='settings-classification'>
          <div className='classification-personal'>
            <input
              name='organization'
              type='radio'
              id='personal'
              value={false}
              onChange={changeHandler}
            />
            <label className='form-radio-label' htmlFor='personal'>
              Personal
            </label>
          </div>
          {/*Organization*/}
          <div className='classification-organization'>
            <input
              name='organization'
              type='radio'
              id='organization'
              value={true}
              onChange={changeHandler}
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
