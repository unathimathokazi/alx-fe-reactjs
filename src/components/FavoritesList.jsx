import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favs = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>Favorites</h2>
      {favs.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
