import axios from "axios";

const recipeApi = axios.create({
  baseURL: process.env.REACT_APP_API + "/week",
  withCredentials: true,
});

export const getRandomRecipeByCat = catString => recipeApi.get(`/weekGenerator/${catString}`)