import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login"); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <header>
        
      </header>
      <main>
        <h1>{isLoggedIn ? "Welcome back!" : "Login"}</h1>

        {!isLoggedIn ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div >
              <label for="username">Username: </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <br />
            <div>
              <label for="password">Password: </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <button type="submit">Login</button>
          </form>
        ) : (
          <div>
            <p>You are logged in 🎉</p>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </main>
    </>
  );
}

export default Login;
