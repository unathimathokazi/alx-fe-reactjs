import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended for You</h2>
      <button onClick={generateRecommendations}>Refresh</button>
      {recommendations.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
