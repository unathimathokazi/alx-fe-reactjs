import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
