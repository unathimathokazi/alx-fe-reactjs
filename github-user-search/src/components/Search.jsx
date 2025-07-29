import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      // Build the search query
      let queryString = query.trim();
      if (location.trim()) queryString += `+location:${location.trim()}`;
      if (minRepos.trim()) queryString += `+repos:>=${minRepos.trim()}`;

      const response = await fetch(
        `https://api.github.com/search/users?q=${queryString}`
      );
      if (!response.ok) throw new Error("User not found");

      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username..."
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location (optional)"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repos (optional)"
          className="border px-3 py-2 rounded w-full"
          min="0"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 bg-gray-100 p-4 rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
