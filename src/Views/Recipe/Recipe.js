import React from "react";
import { recipe as recipeService } from "../../service/recipe.service";
import { useParams } from "react-router-dom";
import "./Recipe.css";
import { Link } from "react-router-dom";

export function Recipe() {
  const [recipe, setRecipe] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);

  const { recipeId } = useParams();

  const getRecipe = async (id) => {
    const { data } = await recipeService(id);
    setRecipe(data);
    var ing = data.ingredients[0].split(",");

    setIngredients(ing);
  };

  React.useEffect(() => {
    getRecipe(recipeId);
  }, [recipeId]);

  return (
    <div className="padding-container">
      <div className="card my-card">
        <div className="card-body">
        <h5>{recipe.name}</h5>

          { recipe.image ? (
            <img
              className="card-img-top"
              alt="foodImage"
              src={recipe.image}
            ></img>
          ) : (
            <img
            className="card-img-top"
            alt="foodImage"
            src="/img/no-image.png"
          ></img>
          )
          }
          <h6>Steps to follow</h6>
          <p className="card-text">{recipe.description}</p>
        </div>
        <h6>Ingredients</h6>
        <ul className="list-group list-group-flush">
          {ingredients.map(function (i) {
            return (
              <li key={i} className="list-group-item">
                {i}
              </li>
            );
          })}
        </ul>

        <Link to="/allrecipes">
          <img
            src="/img/previous.png"
            alt="preciusIcon"
            width="40"
            height="40"
          ></img>
        </Link>
      </div>
    </div>
  );
}
