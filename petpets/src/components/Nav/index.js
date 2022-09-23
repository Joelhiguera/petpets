import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
        <div className="navbarContainer">
          <h2 className="logo">
            <Link to="/">
              PETPETS
            </Link>
          </h2>
        <ul className="navbarUl">
          <li className="navbarLi">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="navbarLi">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="navbarLi">
            <Link to="/shop">
              Shop
            </Link>
          </li>
        </ul>
        </div>
      );
    }
  
    export default Nav