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
  // Logic for handling login form submission
  return (
    <form>
      {/* Login form fields */}
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

const SignupForm = () => {
  // Logic for handling signup form submission
  return (
    <form>
      {/* Signup form fields */}
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default LoginSignup;
