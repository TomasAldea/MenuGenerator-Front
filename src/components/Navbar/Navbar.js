import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Logout } from "../Logout/Logout";
import { useAuth } from "../../context/AuthContext.utils";

export function Navbar() {
  
  const {user} = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Go home
        </Link>
        {user.isLogged ? (
          <React.Fragment>
            <Link className="navbar-brand" to="/UserProfile">Profile</Link>
            <Logout />
          </React.Fragment>
          
        ) : (
          <React.Fragment>
            <Link className="navbar-brand" to="/login">
              Login
            </Link>
            <Link className="navbar-brand" to="/signup">
              signup
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

