import React from "react";

const RecipeForm = ({ match }) => {
  if (match && match.params && match.params.id) {
    return <h1>Recipe form: {match.params.id}</h1>;
  } else {
    return <h1>New recipe form</h1>;
  }
};

export default RecipeForm;
