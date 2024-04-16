import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <div className="buttons">
          <Link to="/login">
            <button className="btn">Login / Sign Up</button>
          </Link>
          <Link to="/contact">
            <button className="btn">Contact Us</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
