import React, { useEffect } from 'react'
import { useState } from 'react'
import Validation from './Validation'

const SignIn = ({submitForm}) => {
  const [data, setData] = useState({
    e_mail: '',
    passw: '',
  })

  const [error, setError] = useState ({})
  const [correctData, setCorrectData] = useState (false)
 
 const handleChange = (e) => {
 setData ({
   ...data,
   [e.target.name] : e.target.value,
 })
 }
const handleFormSubmit = (e) => {
  e.preventDefault()
  setError(Validation(data))
  setCorrectData(true)
}

useEffect(() => {
  if(Object.keys(error).length === 0 && correctData) {
    submitForm(true);
  }

}, [error]);

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

