import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import Validation from './Validation'
import { AuthContext } from '../Authentication/AuthContext';

import { signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const SignIn = ({submitForm}) => {
  const authContext = useContext(AuthContext);
  
  const [data, setData] = useState({
    e_mail: '',
    passw: '',
  })

  const [error, setError] = useState ({})
  const [correctData, setCorrectData] = useState (false)
  const navigateTo = useNavigate();
 
 const handleChange = (e) => {
 setData ({
   ...data,
   [e.target.name] : e.target.value,
 })
 }
const handleFormSubmit = (e) => {
  e.preventDefault()
  // setError(Validation(data))
  // setCorrectData(true)

  signInWithEmailAndPassword(auth, data.e_mail, data.passw)
  .then((authCredential) => {
    // Sikeres volt a belepes a usernek
    console.log('user', authCredential.user);
    authContext.setUserLog(prev=>({...prev, user:auth.currentUser}));
    /* authContext.setUserLogged(true) */
    navigateTo('/profile');
  })
  .catch(e => {
    console.log(e?.message)
  });
}

// useEffect(() => {
//   if(Object.keys(error).length === 0 && correctData) {
//     submitForm(true);
//   }
// }, [error]);

  return (
    <div className='sign-in-container'>
      <div className='mainapp'></div>
      <div>
        <h2 className='title'> Sign In </h2>
      </div>
      <form className='form-wrapper'>
      <div className='mail'>
        <label className='label'>Email</label>
        <input
         className='input' 
         type='email' 
         name='e_mail' 
         value={data.e_mail}
         onChange={handleChange}/>
         {error.e_mail && <p className='errors'>{error.e_mail}</p>}
      </div>
      <div className='password'>
        <label className='label'>Password</label>
        <input className='input'
         type='password' 
         name='passw' 
         value={data.passw} 
         onChange={handleChange}/>
        {error.passw && <p className='errors'>{error.passw}</p>}
      </div>
      <div>
        <button className='submit' onClick={handleFormSubmit}>Login</button>
      </div>
      </form>

    </div>
  )
}

export default SignIn

