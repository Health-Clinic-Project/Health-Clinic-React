import React from "react";
import "./Login&Register.css";

export default function Login() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">Sign In</button>
      </form>
    </div>
  );
}
