import React from "react";
import { recipe as recipeService } from "../../service/recipe.service";
import { useParams } from "react-router-dom";
import "./Recipe.css";
import { DeleteRecipe } from "../../components/DeleteRecipe/DeleteRecipe";
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
    <div>
      <div className="card my-card">
        <div className="card-body">
          <img
            className="card-img-top"
            alt="foodImage"
            src={recipe.image}
          ></img>
          <h5>{recipe.name}</h5>
          <h6>Steps to follow</h6>
          <p className="card-text">{recipe.description}</p>
        </div>
        <h6>Ingredients</h6>
        <ul className="list-group list-group-flush">
          {ingredients.map(function (i) {
            return <li className="list-group-item">{i}</li>;
          })}
        </ul>
        <button className="btn btn-outline-info">
        <Link to="/allrecipes">Go back</Link>
      </button>
      </div>
    </div>
  );
}
