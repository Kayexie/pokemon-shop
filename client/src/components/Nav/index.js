import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <dl className="nav-bar">
          <dd >
            <Link to="/orderHistory">
              Order History
            </Link>
          </dd>
          <dd >
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </dd>
        </dl>
      );
    } else {
      return (
        <dl className="nav-bar">
          <dd>
            <Link to="/signup">
              Signup
            </Link>
          </dd>
          <dd>
            <Link to="/login" >
              Login
            </Link>
          </dd>
        </dl>
      );
    }
  }

  return (
    <header className="flex-row">
       <div id="header-logo">
        <Link to="/">
        <img src={logo} alt="logo" width="150"/>
        </Link>
        </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
