import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import { editRecipe } from "../../service/recipe.service";
import { recipe as recipeService } from "../../service/recipe.service";
import "./RecipeEdit.css";
import { useParams } from "react-router-dom";

const initialStateEdit = {
  name: "",
  ingredients: "",
  description: "",
  category: "",
};

export function RecipeEdit() {
    

  //----- get recipe to placeholder imputs -----//


  const [state, setState] = React.useState(initialStateEdit);

  const { recipeId } = useParams();

  const getRecipe = async (id) => {
    const { data } = await recipeService(id);
    setState({
      name: data.name,
      ingredients: data.ingredients,
      description: data.description,
      category: data.category,
    })
  };


  React.useEffect(() => {
    getRecipe(recipeId);
  }, [recipeId]);

  //----- select options -----//

  const options = [
    { value: "first", label: "first" },
    { value: "second", label: "second" },
    { value: "desert", label: "desert" },
  ];

 //----- form states and handlefunctions -----//


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
    return <Redirect to="/UserProfile" />;
  }

  return (
    <form className="create-recipe" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
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
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-light">
      <img src="/img/checked.png"  alt="checkIcon"></img>
      </button>
    </form>
  );
}
