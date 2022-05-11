import EventContainer from '../HomePage/EventContainer';
import UserNavBar from './UserNavbar';
import { useState } from 'react';
export default function MyEvents() {
  const [parentDb, setParentDb] = useState([]);
  return (
    <div>
      <UserNavBar />
      <EventContainer
        containerName={'Events created by me'}
        setParentDb={setParentDb}
        eventCardIndex={0}
      />
      <EventContainer
        containerName={'Events attended by me'}
        setParentDb={setParentDb}
        eventCardIndex={0}
      />
    </div>
  );
}
