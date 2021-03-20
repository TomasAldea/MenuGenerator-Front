import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import { newRecipe } from "../../service/recipe.service";
import { uploadFileService } from "../../service/recipe.service";
import "./RecipeCreate.css"

export function RecipeCreate() {
  const initialState = {
    name: "",
    ingredients: [],
    description: "",
    category: "",
    picture: "",
  };
  const [state, setState] = React.useState(initialState);
  const [redirect, setRedirect] = React.useState(false);

  //------function to add image------//

   const handleUpload = async (e) => {
    console.log("e.target", e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    const {data} = await uploadFileService(uploadData);
    setState({ ...state, image: data });
  };

  const options = [
    { value: "first", label: "first" },
    { value: "second", label: "second" },
    { value: "desert", label: "desert" },
  ];



  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await newRecipe(state);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    
    <form className="create-recipe"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={state.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="ingredients">Ingredients</label>
      <input
        type="text"
        name="ingredients"
        id="ingredients"
        value={state.ingredients}
        onChange={handleChange}
        required
      />
<label htmlFor="category">Category</label>
      <Select required options={options} onChange={({value}) => setState({...state, category: value})} />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={state.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="file">file</label>
        <input
          type="file"
          name="picture"
          id="picture"
          value={state.picture}
          onChange={handleUpload}
        />
      <button type="submit" className="btn-size btn btn-success">Create</button>
    </form>
  );
}
