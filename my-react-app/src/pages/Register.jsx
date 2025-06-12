import React from "react";
import "./Login&Register.css";

export default function Register() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">Create Account</button>
      </form>
    </div>
  );
}
