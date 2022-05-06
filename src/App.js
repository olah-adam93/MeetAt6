import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/NavBar_Main/Header";
import Footer from "./components/navbar/Footer";

import Home from "./components/main/Home";
import About from "./components/main/About";
import Events from "./components/main/Events";

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
          <Route path="/" element={<div>Profile</div>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
