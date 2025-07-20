
import React from "react";

function Navbar() {
  const navbarStyle = {
    display: "flex",                  
    justifyContent: "space-between", 
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: "1rem"
  };

  return (
    <nav style={navbarStyle}>
      <h2>My Company</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
