import React from "react";
import { allRecipes } from "../../service/recipe.service";

export function Recipes() {
  const [recipes, setRecipes] = React.useState();

  const getRecipes = async () => {
    const { data } = await allRecipes();
    setRecipes(data);
  };

  React.useEffect(() => {
    getRecipes();
  }, []);

  console.log("recipes", recipes);
  return <h1>All Recipes View</h1>;
}
