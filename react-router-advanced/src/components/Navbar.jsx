// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/post/1">Post 1</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/profile/details">Profile Details</Link> |{" "}
      <Link to="/profile/settings">Profile Settings</Link>
    </nav>
  );
}
