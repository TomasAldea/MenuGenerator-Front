import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import { editRecipe } from "../../service/recipe.service";
import { recipe as recipeService } from "../../service/recipe.service";
import "./RecipeEdit.css";
import { useParams } from "react-router-dom";
import {uploadFileService} from "../../service/recipe.service"

const initialStateEdit = {
  name: "",
  ingredients: "",
  description: "",
  category: "",
  picture: "",
};


export function RecipeEdit() {

  const [state, setState] = React.useState(initialStateEdit);

  const { recipeId } = useParams();

  const handleUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    const { data } = await uploadFileService(uploadData);
    setState({ ...state, image: data });
  };

  const getRecipe = async (id) => {
    const { data } = await recipeService(id);
    setState({
      name: data.name,
      ingredients: data.ingredients,
      description: data.description,
      picture: data.filename,
    });
return   };


  React.useEffect(() => {
    getRecipe(recipeId);
  }, [recipeId]);

  //----- select options -----//

  const options = [
    { value: "first", label: "First" },
    { value: "second", label: "Second" },
    { value: "desert", label: "Desert" },
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
    <div className="padding-container">
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
        <label htmlFor="file">File</label>

        <input
          type="file"
          name="picture"
          id="picture"
          value={state.picture}
          onChange={handleUpload}
        />
        <button type="submit" className="btn btn-light">
          <img src="/img/checked.png" alt="checkIcon"  width="40" height="40"></img>
        </button>
      </form>
    </div>
  );
}
