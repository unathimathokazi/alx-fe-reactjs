// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Pap & Chakalaka", description: "A South African staple." },
    { id: 2, title: "Boerewors Roll", description: "Grilled sausage with a spicy kick." },
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
