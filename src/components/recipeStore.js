import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], 
    })),

  
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes,
    })),

  
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated,
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], 
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

 

  generateRecommendations: () =>
    set((state) => {
      
      const favorites = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      const randoms = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );

      return {
        recommendations: [...favorites, ...randoms],
      };
    }),
}));
