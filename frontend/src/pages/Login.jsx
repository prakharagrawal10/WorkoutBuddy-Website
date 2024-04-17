import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link to={isLogin ? "/signup" : "/login"} onClick={toggleForm}>
          {isLogin ? "Sign Up" : "Login"}
        </Link>
      </p>
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Clear form fields
        setEmail("");
        setPassword("");
        setError("");
        // Redirect to dashboard or another page on successful login
        window.location.href = "/dashboard";
      } else {
        const data = await response.json();
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Login form fields */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Clear form fields
        setName("");
        setEmail("");
        setPassword("");
        setError("");
        // Redirect to dashboard or another page on successful signup
        window.location.href = "/dashboard";
      } else {
        const data = await response.json();
        setError(data.error || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Signup form fields */}
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default LoginSignup;
