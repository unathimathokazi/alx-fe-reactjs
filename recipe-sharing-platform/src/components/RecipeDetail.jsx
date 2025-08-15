import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found.</p>;
  }

  const instructions = recipe.instructions || "No instructions provided.";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700 whitespace-pre-line">{instructions}</p>
    </div>
  );
};

export default RecipeDetail;
