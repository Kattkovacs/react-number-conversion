import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Converter</div>
        <ul className="nav">
          <li>
            <p>About</p>
          </li>
          <li>
            <p>FAQ</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
