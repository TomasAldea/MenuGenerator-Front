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
            <Link className="prevent-week" to={`/recipe/${i._id}`}>
              <div className="all-cards card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text card-title">Category: {i.category}</p>
              <div className="btn-details">
               <button className="text btn my-button">Details</button>
                <img src="/img/details.png"></img>
                </div>
              </div>
              </Link>
              
            </div>
            
          </div>
          
        );
      })}
    </div>
  );
}
