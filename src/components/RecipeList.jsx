const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
const recipesToShow = filteredRecipes.length ? filteredRecipes : recipes;

return (
  <div>
    {recipesToShow.map(recipe => (
      <div key={recipe.id}>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    ))}
  </div>
);
