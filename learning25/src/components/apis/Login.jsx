import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password) {
      setError("Password is required");
    } else {
      setError("");
      console.log("Logging in with:", email, password);
    }
  };

  return (
    <div className="login-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Survey Snap</h2>
        <p>Welcome back! Please login to continue.</p>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error-text">{error}</p>}
            </div>
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
