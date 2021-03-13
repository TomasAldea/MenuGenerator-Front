import React from "react";
import { deleteRecipe, recipe } from "../../service/recipe.service";
import { useParams, useHistory } from "react-router-dom";


export function DeleteRecipe() {


  const { recipeId } = useParams();
  const {push} = useHistory()

  const recipeDelete = async () => {
      const {data} = await deleteRecipe(recipeId)
      push("/allrecipes")
  };

  return (
    <button className="btn btn-outline-danger" onClick={recipeDelete}>
      Delete
    </button>
  );
}
