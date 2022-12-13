
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Voiture_hydrogene from './pages/voiture-hydrogene/Voiture_hydrogene'
import NAMXConcept from './pages/NAMX Concept/NAMXConcept'
function App() {
  return (
    <div >
    <Navbar/>
<Router>
  <Routes>
  <Route path='/' exact element={<Home />} /> 
  <Route path='/voiture_hydrogene' exact element={<Voiture_hydrogene/>} />
  <Route path='/NAMXConcept' exact element={<NAMXConcept />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
