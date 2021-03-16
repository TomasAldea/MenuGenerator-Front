import axios from "axios";

const recipeApi = axios.create({
  baseURL: 'http://localhost:4000/week',
  withCredentials: true,
});

export const getRandomRecipeByCat = catString => recipeApi.get(`/weekGenerator/${catString}`)