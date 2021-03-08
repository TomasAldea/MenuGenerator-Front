import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { RecipeCreate } from "./Views/RecipeCreate/RecipeCreate";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipecreate">
          <RecipeCreate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
