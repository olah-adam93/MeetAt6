import "./App.css";
import { Routes, Route } from "react-router-dom";

/* Layouts */
import MainPageLayout from "./layouts/MainPageLayout";
import UserMainPageLayout from "./layouts/UserMainPageLayout";

/* Components */
import Main from "./views/Main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route path="/" element={<Main />} />
        </Route>

        <Route element={<UserMainPageLayout />}>
          <Route path="/profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
