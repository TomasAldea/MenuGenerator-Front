import axios from "axios";

const recipeApi = axios.create({
  baseURL: 'http://localhost:4000/recipes',
  withCredentials: true,
});

export const newRecipe = recipe => recipeApi.post('/recipe', recipe)

export const allRecipes = () => recipeApi.get('/allrecipes')

export const recipe = recipeId => recipeApi.get(`/recipe/${recipeId}`)

export const editRecipe = (recipeId, recipe) => recipeApi.patch(`/recipe/${recipeId}`, recipe)

export const deleteRecipe = recipeId => recipeApi.delete(`/recipe/${recipeId}`)

export const getRandomRecipeByCat = catString => recipeApi.get(`/weekGenerator/${catString}`)