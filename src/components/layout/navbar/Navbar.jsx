import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <NavLink to="/" className="logo">
        <img src="/rotaract.svg" alt="logo" />
      </NavLink>
      <NavLink to="/" className="logo-small">
        <img src="/rotaract-small.svg" alt="logo" />
      </NavLink>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Quienes somos?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/activities"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Actividades y encuentros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donate"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <div className="dona-div">Dona</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
