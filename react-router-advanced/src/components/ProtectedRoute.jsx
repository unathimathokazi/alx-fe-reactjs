import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = true; // later replace with real auth logic

  return isLoggedIn ? children : <Navigate to="/login" />;
}
