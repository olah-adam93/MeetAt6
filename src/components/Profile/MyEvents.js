import EventContainer from '../HomePage/EventContainer';
import UserNavBar from './UserNavbar';
export default function MyEvents() {
  return (
    <div>
      <UserNavBar />
      <EventContainer containerName={'Events created by me'} />
      <EventContainer containerName={'Events attended by me'} />
    </div>
  );
}
