import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";// Make sure the CSS is imported here

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      setError("User already exists.");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/"); // Redirect to login page after signup
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>

      <form className="glass-form" onSubmit={handleSignup}>
        <h3>Sign Up</h3>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Create password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        <div className="signup-link">
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
