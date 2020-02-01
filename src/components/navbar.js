import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <Link to="/" className="brand-logo">
          Inventory
        </Link>

        <ul className="right">
          <li>
            <Link to="/cart">
              My Cart<i className="material-icons right">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
