import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import RecipeForm from "./pages/RecipeForm";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/recipe/:id" component={Recipe} />
      <Route path="/create">
        <RecipeForm />
      </Route>
      <Route path="/edit/:id" component={RecipeForm} />
    </Switch>
  );
}

export default App;
