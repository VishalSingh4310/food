import React from "react";
import "../styles/main.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_subCont">
        <Link to="/">
          <h4>Foodie</h4>
        </Link>
        <div className="linkCont">
          <span className="active">Home</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
