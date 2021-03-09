import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { RecipeCreate } from "./Views/RecipeCreate/RecipeCreate";
import { Login } from "./components/Login/Login";
import {Signup} from "./components/Signup/Signup";
import {Recipes} from "./Views/Recipes/Recipes"
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
        <Route exact path="/recipecreate">
          <RecipeCreate />
        </Route>
        <PrivateRoute exact path="/allrecipes">
          <Recipes />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
