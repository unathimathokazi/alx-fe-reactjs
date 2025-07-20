// src/App.jsx
import React from "react";
import UserContext from "./context/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const user = { name: "Nelly", age: 23 }; // example context data

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
