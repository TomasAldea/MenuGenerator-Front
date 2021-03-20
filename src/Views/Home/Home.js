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
            <React.Fragment>
              <li>
                <Link className="prevent" to="/recipecreate">Create recipe</Link>
              </li>
              <li>
                <Link className="prevent" to="/allrecipes">See all recipes</Link>
              </li>
              <li>
                <Link className="prevent" to="/WeekGenerator">Create Week</Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>Duis quis augue leo. Curabitur tincidunt</li>
              <br></br>
              <li>Duis quis augue leo. Curabitur tincidunt</li>
              <br></br>
              <li>Duis quis augue leo. Curabitur tincidunt</li>
            </React.Fragment>
          )}
        </ul>
        
      </div>
    </div>
  );
}
