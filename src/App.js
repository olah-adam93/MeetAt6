import './App.css';
import {Routes, Route} from 'react-router-dom';

/* Layouts */
import MainPageLayout from './layouts/MainPageLayout';
import UserMainPageLayout from './layouts/UserMainPageLayout';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route element={<MainPageLayout />}>
                    <Route path='/' element={<div>Main</div>} />
                </Route>

                <Route element={<UserMainPageLayout />}>
                    <Route path='/' element={<div>Profile</div>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
