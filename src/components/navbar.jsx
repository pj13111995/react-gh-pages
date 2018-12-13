import React, { Component } from "react";
//Stateless functional components
const NavBar = ({ length }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">{length}</span>
      </a>
    </nav>
  );
};

export default NavBar;
