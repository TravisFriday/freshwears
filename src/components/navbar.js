import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper black">
      <div className="container">
        <Link to="/freshwears" className="brand-logo">
          Fresh Wears
        </Link>

        <ul className="right">
          <li>
            <Link to="/account">
              <i className="material-icons right">account_circle</i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons right">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
