import React, { useEffect, useCallback } from 'react';
import { useState } from 'react';
import Validation from './Validation';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';


import { createUserData } from '../../services/crud';

const SignUp = ({ submitForm }) => {
  const [data, setData] = useState({
    nam: '',
    e_mail: '',
    passw: '',
    loc: '',
  });

  const [error, setError] = useState({});
  const [correctData, setCorrectData] = useState(false);
  const navigateTo = useNavigate();

  const handleChange = useCallback((e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    if(data?.nam && data?.e_mail && data?.passw && data?.passw.length > 5) {
      setCorrectData(true);
    }

    console.log(data);
  }, [data]);
  
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(Validation(data));
    
    console.log(correctData);
    if(correctData) {
      createUserWithEmailAndPassword(auth, data.e_mail, data.passw)
      .then((authCredential) => {
        // Sikeres volt a regisztracio
        console.log('user', authCredential.user);
        console.log('user', auth?.currentUser);
        navigateTo('/thankyou');
      })
      .then(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if(user.uid) {
          updateProfile(user, {
            displayName: data.nam
          })
          .then(() => {
            console.log(user.displayName);
          }).catch((error) => {
            console.log(error);
          });
          createUserData(`userDetails/${user.uid}`, { 
              location: data.loc,
              organization: false
          })
        }
      })
      .catch(e => console.log(e));
    }
  };

  console.log(correctData);

  // useEffect(() => {
  //   if (Object.keys(error).length === 0 && correctData) {
  //     submitForm(true);
  //   }
  // }, [error, correctData, submitForm]);

  return (
    <div className='sign-up-container'>
      <div className='mainapp'></div>
      <div>
        <h2 className='title'> Sign In </h2>
      </div>
      <form className='form-wrapper'>
        <div className='name'>
          <label className='label'>Name</label>
          <input
            className='input'
            type='text'
            name='nam'
            value={data.nam}
            onChange={handleChange}
          />
          {error.nam && <p className='errors'>{error.nam}</p>}
        </div>
        <div className='mail'>
          <label className='label'>Email</label>
          <input
            className='input'
            type='email'
            name='e_mail'
            value={data.e_mail}
            onChange={handleChange}
          />
          {error.e_mail && <p className='errors'>{error.e_mail}</p>}
        </div>
        <div className='password'>
          <label className='label'>Password</label>
          <input
            className='input'
            type='password'
            name='passw'
            value={data.passw}
            onChange={handleChange}
          />
          {error.passw && <p className='errors'>{error.passw}</p>}
        </div>
        <div className='location'>
          <label className='label'>Location</label>
          <input
            className='input'
            type='text'
            name='loc'
            value={data.loc}
            onChange={handleChange}
          />
          {error.loc && <p className='errors'>{error.loc}</p>}
        </div>
        <div>
          <button className='submit' onClick={handleFormSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>

  )
}

export default SignUp




