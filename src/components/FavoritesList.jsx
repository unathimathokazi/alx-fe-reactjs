
import React from 'react';
import useRecipeStore from "../recipeStore";

import useRecipeStore from "../recipeStore";


function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
    </ul>
  );
}

export default RecipeList;
