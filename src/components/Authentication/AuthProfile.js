import { createContext, useContext } from 'react';
import { AuthContext } from './AuthContext';
import SignInView from '../../views/SignInView';
import UserMainPageLayout from '../../layouts/UserMainPageLayout';

export function AuthProfile(props) {
  const authContext = useContext(AuthContext);

  if (authContext.user) {
    return <UserMainPageLayout />;
  }
}
