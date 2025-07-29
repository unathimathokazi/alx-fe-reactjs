
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch (err) {
      setError(true);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username..."
          className="border px-2 py-1 rounded w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {user && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;
