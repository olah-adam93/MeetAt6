import './App.css';
import { Routes, Route } from 'react-router-dom';
/* Components */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/* Views */
import AboutView from './views/AboutView';
import EventsView from './views/EventsView';
import ProfileView from './views/ProfileView';
import ChosenEventsView from './views/ChosenEventsView';
import AddEventView from './views/AddEventView';
import MyEvents from './components/Profile/MyEvents';
import HomePageView from './views/HomePageView';
import SigninView from './views/SigninView';
/* Layouts */
import MainPageLayout from './layouts/MainPageLayout';
import UserMainPageLayout from './layouts/UserMainPageLayout';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path='/' element={<HomePageView />} />
          <Route path='/home' element={<HomePageView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/events' element={<EventsView />} />
          <Route path='/login' element={<SigninView />} />
        </Route>

        <Route element={<UserMainPageLayout />}>
          <Route path='/profile' element={<ProfileView />} />
          <Route path='/myevents' element={<MyEvents />} />
          <Route path='/chosenevents' element={<ChosenEventsView />} />
          <Route path='/addevent' element={<AddEventView />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
