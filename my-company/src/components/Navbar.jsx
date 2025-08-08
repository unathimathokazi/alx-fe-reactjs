import React from "react";
import { Link } from "react-router-dom";  // <-- import Link

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: "1rem"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
    padding: 0,
    margin: 0
  };

  return (
    <nav style={navbarStyle}>
      <h2>My Company</h2>
      <ul style={navLinksStyle}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
