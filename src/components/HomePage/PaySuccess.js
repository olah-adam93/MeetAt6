import React from 'react'
import './Styles/JoinSuccess.css'
import success from '../../others/decoration/done4.svg'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {auth} from '../../config/firebase';
import {useEffect} from 'react'
import {updateData} from '../../services/crud';


function PaySuccess() {
  const navigateTo = useNavigate()
  const [searchParams] = useSearchParams();
  const user = auth.currentUser
  useEffect(() => {
    if (searchParams.get('success') && searchParams.get('key')/*  eventInfo?.[0] */ && user?.uid) {
      updateData('eventAttendees', searchParams.get('key'), {[user.uid]: user.displayName})
    }
  }, [searchParams, user]);
  return (
    <div className='join-success-container'>  
      <div>
        <h2>You have successfully paid for the event! </h2>
        <button onClick={()=> navigateTo('/profile/searchevent')}>Back to Searching Events!</button>
      </div>
      <img src={success} alt="join success" />
      
    </div>
  )
}

export default PaySuccess