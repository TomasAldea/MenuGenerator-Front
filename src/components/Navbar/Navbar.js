import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

export function Navbar () {

    return (
        <div className="navbar">
           <Link to="/">Go home</Link>
           <Link to="/recipecreate">Create recipe</Link>
        </div>
    )
}