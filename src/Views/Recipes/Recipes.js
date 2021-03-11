import React from "react";
import { allRecipes } from "../../service/recipe.service";
import "./Recipes.css";
import { Link } from "react-router-dom";

export function Recipes() {
  const [recipes, setRecipes] = React.useState([]);

  const getRecipes = async () => {
    const { data } = await allRecipes();
    setRecipes(data);
  };

  React.useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="row">
      {recipes.map(function (i) {
        return (
          <div key={i._id} className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.category}</p>
                <button className="btn btn-outline-info">
                  <Link to={`/recipe/${i._id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
