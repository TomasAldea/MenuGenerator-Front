import React from "react";
import "./Home.css";
import { useAuth } from "../../context/AuthContext.utils";
import { Link } from "react-router-dom";

export function Home() {
  const { user } = useAuth();

  return (
    <div className="margin container text-center">
      <h1 className="home-tittle">Menu Generator</h1>
      <div className="blackboard text-center">
        {user.isLogged ? (
          <h2 className="centered">what can i do?</h2>
        ) : (
          <h2 className="centered">About us</h2>
        )}

        <ul className="about-text">
          {user.isLogged ? (
            <div className="about-us-container">
              <button className="my-button">
                <Link className="prevent" to="/recipecreate">
                <h2 className="about-us-text">Create New Recipe</h2>
                </Link>
              </button>
              <button className="my-button">
                <Link className="prevent" to="/allrecipes">
                <h2 className="about-us-text">See All Recipes</h2>
                </Link>
              </button>
              <button className="my-button">
                <Link className="prevent" to="/WeekGenerator">
                <h2 className="about-us-text">Create Week</h2>
                </Link>
              </button>
            </div>
          ) : (
            <React.Fragment>
              <h2 className="about-us-text">An app for small businesses</h2>
              <br></br>
              <h2 className="about-us-text">Easy and intuitive</h2>
              <br></br>
              <h2 className="about-us-text">designed by real chefs</h2>
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}
