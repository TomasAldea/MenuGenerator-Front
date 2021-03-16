import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import { editRecipe } from "../../service/recipe.service";
import { recipe as recipeService } from "../../service/recipe.service";
import "./RecipeEdit.css";
import { useParams } from "react-router-dom";

export function RecipeEdit() {
    
  const initialState = {
    name: "",
    ingredients: [],
    description: "",
    category: "",
  };

  //----- get recipe to placeholder imputs -----//

  const [recipe, setRecipe] = React.useState([]);

  const { recipeId } = useParams();

  const getRecipe = async (id) => {
    const { data } = await recipeService(id);
    setRecipe(data);
  };

  const initialStateEdit = {
    name: recipe.name,
    ingredients: recipe.ingredients,
    description: recipe.description,
    category: recipe.category,
  };

  React.useEffect(() => {
    getRecipe();
  }, [recipeId]);

  //----- select options -----//

  const options = [
    { value: "first", label: "first" },
    { value: "second", label: "second" },
    { value: "desert", label: "desert" },
  ];

 //----- form states and handlefunctions -----//

  const [state, setState] = React.useState(initialState);
  const [redirect, setRedirect] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editRecipe(recipeId, state);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form className="create-recipe" onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={state.name}
        placeholder={initialStateEdit.name}
        onChange={handleChange}
      />
      <label htmlFor="ingredients">Ingredients</label>
      <input
        type="text"
        name="ingredients"
        id="ingredients"
        value={state.ingredients}
        placeholder={initialStateEdit.ingredients}
        onChange={handleChange}
      />
      <label htmlFor="category">Category</label>
      <Select
        options={options}
        onChange={({ value }) => setState({ ...state, category: value })}
      />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={state.description}
        placeholder={initialStateEdit.description}
        onChange={handleChange}
      />
      <button type="submit" className="btn-size btn btn-success">
        Edit
      </button>
    </form>
  );
}
