import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Departments from "./Components/Departments/Departments";
import CampusLife from "./Components/CampusLife/CampusLife";
import CentreofExcellence from "./Components/CentreofExcellence/CentreofExcellence";
import CentreofRobotics from "./Components/CentreofRobotics/CentreofRobotics";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campuslife" element={<CampusLife />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/centreofrobotics" element={<CentreofRobotics />} />
          <Route path="/centreofexcellence" element={<CentreofExcellence />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
