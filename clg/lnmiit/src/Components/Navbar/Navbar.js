import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import BlackLogo from "./lnmiitLogoBlack.png";
import WhiteLogo from "./lnmiitLogo.png";

const Navbar = () => {
  const location = useLocation();
  const [className, setClassName] = useState("HomePageBackGround");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/departments":
        setClassName("DepartmentsBackGround NavBarImage");
        break;
      case "/campuslife":
        setClassName("CampusLifeBackGround NavBarImage");
        break;
      case "/centreofrobotics":
        setClassName("CentreOFRoboticsBackGround NavBarImage");
        break;
      case "/centreofexcellence":
        setClassName("CentreOfExcellenceBackGround NavBarImage");
        break;
      default:
        setClassName("HomePageBackGround NavBarImage");
        break;
    }
  }, [location.pathname]);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/departments", text: "Departments" },
    { to: "/campuslife", text: "Campus Life" },
    { to: "/centreofrobotics", text: "Centre of Robotics" },
    { to: "/centreofexcellence", text: "Centre of Excellence" },
  ];
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${className} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="LNMIITLogo">
        <img src={BlackLogo} alt="LNMIIT" className="LNMIITBlackLogo" />
        <img src={WhiteLogo} alt="LNMIIT" className="LNMIITWhiteLogo" />
      </div>

      <div className={`NavbarLinks ${isMenuOpen ? "menu-open" : ""}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} onClick={closeMenu}>
              <Link className="NavbarHeading" to={link.to}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section className="top-nav">
        <input
          id="menu-toggle"
          type="checkbox"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          {navLinks.map((link, index) => (
            <li key={index} onClick={closeMenu}>
              <Link className="NavbarHeading" to={link.to}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
