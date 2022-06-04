import React from 'react';
import './Styles/JoinSuccess.css';
import success from '../../others/decoration/done4.svg';
import cancel from '../../others/decoration/cancel.svg';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {auth} from '../../config/firebase';
import {useEffect} from 'react';
import {updateData} from '../../services/crud';

function PaySuccess() {
  const navigateTo = useNavigate();
  const [searchParams] = useSearchParams();
  const user = auth.currentUser;

  useEffect(() => {
    if (
      searchParams.get('success') === 'true' &&
      searchParams.get('key') /*  eventInfo?.[0] */ &&
      user?.uid
    ) {
      updateData('eventAttendees', searchParams.get('key'), {
        [user.uid]: user.displayName,
      });
    }
  }, [searchParams, user]);

  return (
    <div className='join-success-container'>
      {searchParams.get('success') === 'true' ? (
        <>
          <div>
            <h2>You have successfully paid for the event! </h2>
            <button onClick={() => navigateTo('/profile/searchevent')}>
              Back to Searching Events!
            </button>
          </div>
          <img src={success} alt='join success' />
        </>
      ) : (
        <>
          <div>
            <h2>Failed payment! </h2>
            <button onClick={() => navigateTo(`/eventpage/${searchParams.get('key')}`)}>
              Back to Event! Try Again!
            </button>
          </div>
          <img src={cancel} alt='join failed' />
        </>
      )}
    </div>
  );
}

export default PaySuccess;
