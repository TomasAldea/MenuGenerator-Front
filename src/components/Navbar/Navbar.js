import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Logout } from "../Logout/Logout";
import { useAuth } from "../../context/AuthContext.utils";

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <button className="text my-button">
            <img src="/img/home.png"></img>
            Home
          </button>
        </Link>
        {user.isLogged ? (
          <React.Fragment>
            <Link className="navbar-brand" to="/UserProfile">
              <button className="text my-button">
                <img src="/img/user.png"></img>
                My Profile
              </button>
            </Link>
            <button className="text my-button">
              <Logout />
              Logout
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link className="navbar-brand" to="/login">
              <button className="text my-button">
                <img src="/img/log-in.png" width="50" height="50"></img>
                Login
              </button>
            </Link>
            <Link className="navbar-brand" to="/signup">
              <button className="text my-button">
                <img src="/img/signup.png" width="40" height="40"></img>
                SignUp
              </button>
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}
