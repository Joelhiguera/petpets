import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
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
        </ul>
      );
    }
  
    export default Nav