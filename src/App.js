import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/NavBar_Main/Header";
import Footer from "./components/navbar/Footer";
/*MainPage */
import Home from "./components/main/Home";
import About from "./components/main/About";
import Events from "./components/main/Events";
/*Profile*/
import Profile from "./views/Profile/Profile";
import ChosenEvents from "./views/ChosenEvents/ChosenEvents";
import AddEvent from "./views/AddEvent/AddEvent";
import MyEvents from "./components/profile/MyEvents"
/* Layouts */
import MainPageLayout from "./layouts/MainPageLayout";
import UserMainPageLayout from "./layouts/UserMainPageLayout";





function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<div>Login</div>} />
        </Route>

        <Route element={<UserMainPageLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/chosenevents" element={<ChosenEvents/>}/>
          <Route path="/addevent" element={<AddEvent/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
