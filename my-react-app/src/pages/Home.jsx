import React from "react";
import "./HomeStyle.css";

export default function Home() {
  return (
    
    <div className="home-container">
      <h1 className="home-title">Welcome to HealthNest Clinic</h1>
      <p className="home-text">
        Your digital gateway to smarter healthcare.
      </p>
      <button className="home-button">Get Started</button>
    </div>
  );
}
