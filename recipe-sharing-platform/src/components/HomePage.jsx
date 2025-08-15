import { Link } from "react-router-dom";
import recipes from "../data.json";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
