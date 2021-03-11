import React from "react";
import {recipe as recipeService} from "../../service/recipe.service"
import {useParams} from "react-router-dom"


export function Recipe () {
    const [recipe, setRecipe] = React.useState();

    const {recipeId} = useParams()

    const getRecipe = async (id) => {
        console.log("recipeId", recipeId)
      const { data } = await recipeService(id);
      setRecipe(data);
      console.log("data single recipe", recipe)
    };
  
    React.useEffect(() => {
      getRecipe(recipeId);
    }, []);

    return <h1>recipe detail</h1>
}