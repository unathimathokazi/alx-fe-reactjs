import axios from "axios";

export const fetchUserData = async (query, location = "", minRepos = "") => {
  let queryString = query.trim();
  if (location.trim()) queryString += `+location:${location.trim()}`;
  if (minRepos.trim()) queryString += `+repos:>=${minRepos.trim()}`;

  const url = `https://api.github.com/search/users?q=${queryString}`;

  const res = await axios.get(url);

  return res.data.items; // returns array of users
};
