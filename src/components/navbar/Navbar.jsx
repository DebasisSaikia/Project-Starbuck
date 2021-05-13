import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Hamburger } from "../hamburger/Hamburger";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_left">
        <Link to="/" className="nav_logo">
          <img
            src="https://pngimg.com/uploads/starbucks/starbucks_PNG17.png"
            alt="starbuck_logo"
          />
        </Link>
        <Link className="nav_links">Menu</Link>
        <Link className="nav_links">Rewards</Link>
        <Link className="nav_links">Gift Cards</Link>
      </div>
      <div className="nav_right">
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
