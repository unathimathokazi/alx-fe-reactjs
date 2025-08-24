import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    // Only submit if no errors
    if (Object.keys(newErrors).length === 0) {
      alert(`User Registered:\nUsername: ${username}\nEmail: ${email}`);
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      {/* Username */}
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-2 py-1 w-full rounded"
        />
        {errors.username && <div className="text-red-500">{errors.username}</div>}
      </div>

      {/* Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 w-full rounded"
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
      </div>

      {/* Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1 w-full rounded"
        />
        {errors.password && <div className="text-red-500">{errors.password}</div>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}
