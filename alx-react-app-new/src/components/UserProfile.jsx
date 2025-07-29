// src/components/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
