import './App.css';
import { Routes, Route } from 'react-router-dom';

/* Components */

import ChosenEvents from './components/Profile/ChosenEvents';
import MyEvents from './components/Profile/MyEvents';
import Settings from './components/Profile/Settings';
import LogOut from './components/Profile/LogOut';

/* Views */
import AboutView from './views/AboutView';
import EventsView from './views/EventsView';
import ProfileView from './views/ProfileView';
import HomePageView from './views/HomePageView';
import SigninView from './views/SigninView';
import PrivacyView from './views/PrivacyView';
import FAQView from './views/FAQView';
import ContactView from './views/ContactView';
import CreateEventView from './views/CreateEventView';
import SearchEventView from './views/SearchEventView';
import EventPageView from './views/EventPageView';

/* Layouts */
import MainPageLayout from './layouts/MainPageLayout';
import UserMainPageLayout from './layouts/UserMainPageLayout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path='/' element={<HomePageView />} />
          <Route path='/home' element={<HomePageView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/privacy' element={<PrivacyView />} />
          <Route path='/events' element={<EventsView />} />
          <Route path='/login' element={<SigninView />} />
          <Route path='/contact' element={<ContactView />} />
          <Route path='/FAQ' element={<FAQView />} />
          <Route path='/eventpage/:event_title' element={<EventPageView />} />
        </Route>

        <Route element={<UserMainPageLayout />}>
          <Route path='/profile' element={<ProfileView />} />
          <Route path='/profile/chosenevents' element={<ChosenEvents />} />
          <Route path='/profile/addevent' element={<CreateEventView />} />
          <Route path='/profile/myevents' element={<MyEvents />} />
          <Route path='/profile/searchevent' element={<SearchEventView />} />
          <Route path='/profile/settings' element={<Settings />} />
          <Route path='/signout' element={<LogOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
