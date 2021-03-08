import React from "react";
import { Redirect } from "react-router-dom";
import { newRecipe } from "../../service/recipe.service";

export function RecipeCreate() {
  const initialState = {
    name: "",
    ingredients: [],
    description: "",
    category: "",
  };

  const [state, setState] = React.useState(initialState);
  const [redirect, setRedirect] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await newRecipe(state);
    console.log("state", state)
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "10px auto",
      }}
    >
      <label htmlFor="name">name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={state.name}
        onChange={handleChange}
      />
      <label htmlFor="ingredients">Ingredients</label>
      <input
        type="text"
        name="ingredients"
        id="ingredients"
        value={state.ingredients}
        onChange={handleChange}
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category"
        value={state.category}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={state.description}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
}
