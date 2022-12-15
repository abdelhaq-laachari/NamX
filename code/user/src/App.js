import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Model from "./pages/model 3d/Model";
import Voiture_hydrogene from "./pages/voiture-hydrogene/Voiture_hydrogene";
import NAMXConcept from "./pages/NAMX Concept/NAMXConcept";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/voiture_hydrogene"
            exact
            element={<Voiture_hydrogene />}
          />
          <Route path="/NAMXConcept" exact element={<NAMXConcept />} />
          <Route path="/model" exact element={<Model />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
