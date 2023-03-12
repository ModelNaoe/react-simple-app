import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/registration" activeClassName="active">
        Registration
      </NavLink>
      <NavLink to="/dashboard" activeClassName="active">
        Dashboard
      </NavLink>
    </div>
  );
}

export default Navbar;
