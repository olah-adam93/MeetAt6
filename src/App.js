import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext, useContext, useEffect } from 'react';

/* Components */
import ScrollToTop from './others/ScrollToTop';

import Settings from './components/Profile/Settings';
import LogOut from './components/Profile/LogOut';

/* Views */
import ChosenEvents from './views/ChosenEvents';
import AboutView from './views/AboutView';
import EventsView from './views/EventsView';
import ProfileView from './views/ProfileView';
import HomePageView from './views/HomePageView';
import SignInView from './views/SignInView';
import SignUpView from './views/SignUpView';
import PrivacyView from './views/PrivacyView';
import FAQView from './views/FAQView';
import ContactView from './views/ContactView';
import CreateEventView from './views/CreateEventView';
import MyEventsView from './views/MyEventsView';
import SearchEventView from './views/SearchEventView';
import EventPageView from './views/EventPageView';
import ThankYouView from './views/ThankYouView';

/* Layouts */
import MainPageLayout from './layouts/MainPageLayout';
import UserMainPageLayout from './layouts/UserMainPageLayout';

/* Authentication Context */
import { AuthContext } from './components/Authentication/AuthContext';
import { AuthProfile } from './components/Authentication/AuthProfile';
import { EventDbContext } from './components/EventDbContext/EventDbContext';

/* CRUD */
import { liveValue, readData } from './services/crud';

function App() {
  const [userLog, setUserLog] = useState({});
  const [db, setDb] = useState([]);

  useEffect(() => {
    const liveChange = liveValue('events', (snapshot) => {
      setDb(Object.entries(snapshot.val()) || []);
    });
    // console.log(db)
    return () => liveChange();
  }, [setDb]);

  return (
    <div className='App'>
      <ScrollToTop />
      <AuthContext.Provider value={{ userLog, setUserLog }}>
        <EventDbContext.Provider value={{ db, setDb }}>
          <Routes>
            <Route element={<MainPageLayout />}>
              <Route path='/' element={<HomePageView />} />
              <Route path='/home' element={<HomePageView />} />
              <Route path='/about' element={<AboutView />} />
              <Route path='/privacy' element={<PrivacyView />} />
              <Route path='/events' element={<EventsView />} />
              <Route path='/signin' element={<SignInView />} />
              <Route path='/signup' element={<SignUpView />} />
              <Route path='/contact' element={<ContactView />} />
              <Route path='/FAQ' element={<FAQView />} />
              <Route path='/eventpage/:eventId' element={<EventPageView />} />
            </Route>

            <Route element={<AuthProfile />}>
              <Route path='/profile' element={<ProfileView />} />
              <Route path='/profile/chosenevents' element={<ChosenEvents />} />
              <Route path='/profile/addevent' element={<CreateEventView />} />
              <Route path='/profile/myevents' element={<MyEventsView />} />
              <Route path='/profile/searchevent' element={<SearchEventView />} />
              <Route path='/profile/settings' element={<Settings />} />
              <Route path='/thankyou' element={<ThankYouView />} />
              <Route path='/signout' element={<LogOut />} />
            </Route>
          </Routes>
        </EventDbContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
