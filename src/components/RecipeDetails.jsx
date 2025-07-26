// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found!</p>;

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <EditRecipeForm recipe={recipe} />
      <button onClick={handleDelete} style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}>
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
