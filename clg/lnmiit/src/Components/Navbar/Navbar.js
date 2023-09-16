import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  useNavigate,
} from "react-router-dom";
import "./Navbar.css";
import BlackLogo from "./lnmiitLogoBlack.png";
import WhiteLogo from "./lnmiitLogo.png";
// import LNMIITHome from "./LNMIITHome.jpg";
import { useState } from "react";
// import HomePage from "../HomePage/HomePage";
const Navbar = () => {
  const [className, setClassName] = useState("HomePageBackGround");
  useEffect(() => {});
  const ChangeBackGround = () => {
    const url = window.location.href;
    if (url.endsWith("/")) {
      setClassName("HomePageBackGround");
    }
    if (url.endsWith("/departments")) {
      setClassName("DepartmentsBackGround");
    }
    if (url.endsWith("/campuslife")) {
      setClassName("CampusLifeBackGround");
    }
    if (url.endsWith("/centreofrobotics")) {
      setClassName("CentreOFRoboticsBackGround");
    }
    if (url.endsWith("/centreofexcellence")) {
      setClassName("CentreOfExcellenceBackGround");
    }
  };

  return (
    <Router>
      <nav className={className}>
        <div className="LNMIITLogo">
          <img src={BlackLogo} alt="LNMIIT" className="LNMIITBlackLogo"></img>
          <img src={WhiteLogo} alt="LNMIIT" className="LNMIITWhiteLogo"></img>
        </div>

        <div>
          <ul>
            <li onClick={ChangeBackGround}>
              <NavLink className="NavbarHeading" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={ChangeBackGround}>
              <NavLink className="NavbarHeading" to="/departments">
                Departments
              </NavLink>
            </li>
            <li onClick={ChangeBackGround}>
              <NavLink className="NavbarHeading" to="/campuslife">
                Campus Life
              </NavLink>
            </li>
            <li onClick={ChangeBackGround}>
              <NavLink className="NavbarHeading" to="/centreofrobotics">
                Centre of Robotics
              </NavLink>
            </li>
            <li onClick={ChangeBackGround}>
              <NavLink className="NavbarHeading" to="/centreofexcellence">
                Centre of Excellence
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
