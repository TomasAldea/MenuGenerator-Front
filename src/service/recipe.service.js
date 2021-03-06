import axios from "axios";

const recipeApi = axios.create({
  baseURL: process.env.REACT_APP_API + "/recipes",
  withCredentials: true,
});

export const newRecipe = recipe => recipeApi.post('/recipe', recipe)

export const allRecipes = () => recipeApi.get('/allrecipes')

export const recipe = recipeId => recipeApi.get(`/recipe/${recipeId}`)

export const editRecipe = (recipeId, recipe) => recipeApi.put(`/recipe/${recipeId}`, recipe)

export const deleteRecipe = recipeId => recipeApi.delete(`/recipe/${recipeId}`)

export const uploadFileService = file => recipeApi.post("/recipe/upload", file)