import React from "react";

const Recipe = ({ match }) => {
  if (match && match.params && match.params.id) {
    return <h1>Recipe: {match.params.id}</h1>;
  } else {
    return <h1>Recipe not found</h1>;
  }
};

export default Recipe;
