import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
  );
};

export default SearchBar;
