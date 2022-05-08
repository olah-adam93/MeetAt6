<<<<<<< HEAD

import React, { useEffect } from 'react'
import { useState } from 'react'
import Validation from './Validation'
=======
import React, { useEffect } from 'react';
import { useState } from 'react';
import Validation from './Validation';
>>>>>>> 80b4af294fddf80c1f60da8fa2c9f4803110068d

const SignUp = ({ submitForm }) => {
  const [data, setData] = useState({
    nam: '',
    e_mail: '',
    passw: '',
    loc: '',
  });

  const [error, setError] = useState({});
  const [correctData, setCorrectData] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(Validation(data));
    setCorrectData(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && correctData) {
      submitForm(true);
    }
  }, [error]);

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
<<<<<<< HEAD
  )
}

export default SignUp



=======
  );
};

export default SignUp;
>>>>>>> 80b4af294fddf80c1f60da8fa2c9f4803110068d
