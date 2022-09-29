import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Header() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return(
        <div className="headerContainer">
        <h2 className="logo">
          <Link to="/">
            PETPETS
          </Link>
        </h2>
      <ul className="navbarUl">
        <li className="navbarLi">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
        </li>
        <li className="navbarLi">
          <Link to="/Profile">
            Profile
          </Link>
        </li>
      </ul>
      </div>
      );
    } else {
      return (
        <div className="headerContainer">
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
            <Link to="/Profile">
              Profile
            </Link>
          </li>
        </ul>
        </div>
      );
    } 
  }

    return (
      <div className="headerContainer">
        {showNavigation()}
      </div>
    )
 
    }
  
    export default Header