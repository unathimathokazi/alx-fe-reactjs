import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile"; // just in case

import UserContext from "./props/UserContext";

function App() {
  const user = {
    name: "Nelly Coder",
    email: "nelly@example.com"
  };

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
