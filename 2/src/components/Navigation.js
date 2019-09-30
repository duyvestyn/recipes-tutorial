import React from "react";
import useRecipes from "../hooks/useRecipes";
const Navigation = () => {
  const recipes = useRecipes();
  console.dir(recipes);
  return (
    <div>
      {recipes ? (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <a href="">{recipe._rawJson.fields.Name}</a>
            </li>
          ))}{" "}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Navigation;
