import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {Logout} from "../Logout/Logout"

export function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Go home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
        <li>
          <Link to="/recipecreate">Create recipe</Link>
        </li>
        <li>
          <Link to="/allrecipes">See all recipes</Link>
        </li>
        <li>
          <Logout/>
        </li>
      </ul>
    </div>
  );
}

