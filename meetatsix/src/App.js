import "./App.css";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Layer Módosítás 2 Layer</div>} />
      </Routes>
      
    </div>
    
  );
}

export default App;
