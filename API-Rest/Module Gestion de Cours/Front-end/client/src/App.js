import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Home/HomePage.js';
import HebdoPage from "./Hebdo/HebdoPage.jsx";
import ProfPage from "./Profs/ProfPage.jsx";
import EditProf from "./Profs/EditProf.jsx";
import EditHebdo from "./Hebdo/EditHebdo.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/FicheProfesseurs." element={<ProfPage />} />
        <Route path="/update/:id" element={<EditProf />} />


        <Route path="/FicheHebdomadaire." element={<HebdoPage />}  />
        <Route path="/updateHebdo/:id" element={<EditHebdo />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*function App() {
  return (
    <div className="App">
    <HomePage />
    </div>
  );
}*/

//export default App;
