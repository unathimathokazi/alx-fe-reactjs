import React from "react";
import useRecipeStore from './recipeStore';



const RecipeList = () => {
  const { recipes, filteredRecipes } = useRecipeStore();
  const recipesToShow = filteredRecipes.length ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToShow.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
