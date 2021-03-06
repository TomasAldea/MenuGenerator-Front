import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { RecipeCreate } from "./Views/RecipeCreate/RecipeCreate";
import { Recipe } from "./Views/Recipe/Recipe";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import { Recipes } from "./Views/Recipes/Recipes";
import { RecipeEdit } from "./Views/RecipeEdit/RecipeEdit";
import { WeekGenerator } from "./Views/WeekGenerator/WeekGenerator";
import AnonRoute from "./components/Routes/AnonRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { LoginSuccess } from "./Views/AuthMessages/LoginSuccess/LoginSuccess";
import { SignupSuccess } from "./Views/AuthMessages/SignupSuccess/SignupSuccess";
import { UserProfile } from "./Views/UserProfile/UserProfile";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { NotFound } from "./Views/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/loginsuccess">
            <LoginSuccess />
          </PrivateRoute>
          <PrivateRoute exact path="/signupsuccess">
            <SignupSuccess />
          </PrivateRoute>
          <AnonRoute exact path="/login">
            <Login />
          </AnonRoute>
          <AnonRoute exact path="/signup">
            <Signup />
          </AnonRoute>
          <PrivateRoute exact path="/UserProfile">
            <UserProfile />
          </PrivateRoute>
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
          <PrivateRoute exact path="/WeekGenerator">
            <WeekGenerator />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
