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
            <img src="/img/home.png" alt="homeIcon"></img>
          </button>
        </Link>
        {user.isLogged ? (
          <React.Fragment>
            <Link className="navbar-brand" to="/UserProfile">
              <button className="text my-button">
                <img src="/img/user.png" alt="userIcon"></img>
              </button>
            </Link>
            <Logout />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link className="navbar-brand" to="/login">
              <button className="text my-button">
                <img
                  src="/img/log-in.png"
                  alt="loginIcon"
                  width="50"
                  height="50"
                ></img>
              </button>
            </Link>
            <Link className="navbar-brand" to="/signup">
              <button className="text my-button">
                <img
                  src="/img/add-group.png"
                  alt="signupIcon"
                  width="30"
                  height="30"
                ></img>

               
              </button>
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}
