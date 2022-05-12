import { createContext, useContext  } from 'react';
import { AuthContext } from './AuthContext';
import SignInView from './views/SignInView';
import ProfileView from './views/ProfileView';


export function AuthProfileContext(props){
  const authContext = useContext(AuthContext);

  if (authContext.user === null) {
    // bekell leptetni vagz bekerni a belepest
    return <SignInView />
  } else {
    return <ProfileView user={props.children}/>
  }
}