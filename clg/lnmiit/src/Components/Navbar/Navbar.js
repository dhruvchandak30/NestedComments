import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <div>
        <h1>NAVBAR</h1>
        <ul>
          <li>
            <NavLink to="/departments">Departments</NavLink>
          </li>
          <li>
            <NavLink to="/campuslife">Campus Life</NavLink>
          </li>
          <li>
            <NavLink to="/centreofrobotics">Centre of Robotics</NavLink>
          </li>
          <li>
            <NavLink to="/centreofexcellence">Centre of Excellence</NavLink>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default Navbar;
