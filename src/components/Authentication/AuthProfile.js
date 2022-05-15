import { createContext, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import SignInView from '../../views/SignInView';
import UserMainPageLayout from '../../layouts/UserMainPageLayout';
import { liveValue } from '../../services/crud';

export function AuthProfile(props) {
  const authContext = useContext(AuthContext);
  useEffect(()=>{
    const liveUserDetails =liveValue(`userDetails/${authContext.userLog.user.uid}`, (snapshot =>{
      authContext.setUserLog(prev=>({...prev, userDetails: snapshot.val()}))
    }))
    return () => liveUserDetails()
  }, [authContext])
  if (authContext.userLog) {

    return <UserMainPageLayout />;
  }

  return null;
}
