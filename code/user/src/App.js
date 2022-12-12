
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
function App() {
  return (
    <div >
    <Navbar/>
<Router>
  <Routes>
  <Route path='/' exact element={<Home />} /> 
  <Route path='/' exact element={<Home />} />
  <Route path='/' exact element={<Home />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
