import React from "react";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import {Logout} from "../Logout/Logout"

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="container-fluid">


          <Link className="navbar-brand" to="/">Go home</Link>


          <Link className="navbar-brand" to="/login">Login</Link>


          <Link className="navbar-brand" to="/signup">signup</Link>


          <Link className="navbar-brand" to="/recipecreate">Create recipe</Link>


          <Link className="navbar-brand" to="/allrecipes">See all recipes</Link>


          <Logout/>


      </div>
      </nav>
  );
}
