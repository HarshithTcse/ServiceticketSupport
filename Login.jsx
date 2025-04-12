import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // You'll create this CSS file for styles

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!password) {
      alert("Please enter your password.");
      return;
    }

    // Simulate login success
    navigate("/dashboard");
  };

  return (
    <div className="glass-container">
      <div className="background-shape shape1"></div>
      <div className="background-shape shape2"></div>
      <form onSubmit={handleSubmit} className="glass-form">
        <h3>Log In</h3>

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>

        <div className="social">
          <div className="social-btn" onClick={() => window.open("https://accounts.google.com/signin")}>
            <i className="fab fa-google"></i> Google
          </div>
          <div className="social-btn fb" onClick={() => window.open("https://www.facebook.com/login")}>
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>

        <p className="signup-link">
          Don’t have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;