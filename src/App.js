import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { RecipeCreate } from "./Views/RecipeCreate/RecipeCreate";
import { Recipe } from "./Views/Recipe/Recipe";
import { Login } from "./components/Login/Login";
import {Signup} from "./components/Signup/Signup";
import {Recipes} from "./Views/Recipes/Recipes"
import {RecipeEdit} from "./Views/RecipeEdit/RecipeEdit"
import AnonRoute from "./components/Routes/AnonRoute"
import PrivateRoute from "./components/Routes/PrivateRoute"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <AnonRoute exact path="/login">
          <Login />
        </AnonRoute>
        <AnonRoute exact path="/signup">
          <Signup />
        </AnonRoute>
        <PrivateRoute exact path="/recipecreate">
          <RecipeCreate />
        </PrivateRoute>
        <PrivateRoute exact path="/allrecipes">
          <Recipes />
        </PrivateRoute>
        <PrivateRoute exact path="/recipe/:recipeId">
          <Recipe />
        </PrivateRoute>
        <PrivateRoute exact path="/edit/:recipeId">
          <RecipeEdit />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
