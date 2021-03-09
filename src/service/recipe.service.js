import axios from "axios";

const recipeApi = axios.create({
  baseURL: 'http://localhost:4000/recipes',
  withCredentials: true,
});

export const newRecipe = recipe => recipeApi.post('/recipe', recipe)

export const allRecipes = () => recipeApi.get('/allrecipes')