// components/RecipeList.jsx
import React from 'react';
import useRecipeStore from '../store';

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
