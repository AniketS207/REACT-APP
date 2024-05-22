// src/components/register/Register.js
import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== passwordAgain) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BUZZ</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on BUZZ.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSignup}>
            <input
              placeholder="Username"
              className="loginInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              className="loginInput"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
            />
            <button type="submit" className="loginButton">Sign Up</button>
            {error && <p className="errorText">{error}</p>}
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
