import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import PostPage from "./components/PostPage.jsx";
import Profile from "./components/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import BlogPost from "./components/BlogPost.jsx"; // <-- import

export default function App() {
  const isLoggedIn = true; // Simulated login state

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Routes */}
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />  {/* <-- new route */}
      </Routes>
    </Router>
  );
}
