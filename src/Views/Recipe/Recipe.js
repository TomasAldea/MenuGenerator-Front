import React from "react";
import { recipe as recipeService } from "../../service/recipe.service";
import { useParams } from "react-router-dom";
import "./Recipe.css";
import {DeleteRecipe} from "../../components/DeleteRecipe/DeleteRecipe"
import { Link } from "react-router-dom";


export function Recipe() {
  const [recipe, setRecipe] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);

  const { recipeId } = useParams();

  const getRecipe = async (id) => {
    const { data } = await recipeService(id);
    setRecipe(data);
    setIngredients(data.ingredients)
  };

  //const ingredientsArr = recipe.ingredients

  React.useEffect(() => {
    getRecipe(recipeId);
  }, []);

  return (
    <div className="card my-card">
      <div>image</div>
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">{recipe.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {ingredients.map(function (i) {
          return <li className="list-group-item">{i}</li>;
        })}
      </ul>
      <div className="card-body">
          <DeleteRecipe/>
          <button className="btn btn-outline-info">
                <Link to={`/edit/${recipeId}`}>edit</Link>
                </button>
      </div>
    </div>
  );
}

// <img src="..." class="card-img-top" alt="...">
