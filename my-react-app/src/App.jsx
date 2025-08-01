import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PersonalArea from "./pages/PersonalArea";
import PatientsList from "./pages/PatientsList";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorMenu from "./pages/DoctorMenu";
import CreatAppointments from "./pages/CreatAppointments";


import "./AppStyles.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">Healthy Clinic</header>

        <nav className="nav-links">
          <Link to="/"><i className="fas fa-home"></i> Home</Link>
          <Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
          <Link to="/register"><i className="fas fa-user-plus"></i> Register</Link>
          <Link to="/personal"><i className="fas fa-clinic-medical"></i> Personal Area</Link>
          <Link to="/patients"><i className="fas fa-users"></i> Patients</Link>
          <Link to="/DoctorLogin"><i className="fas fa-stethoscope"></i> Doctor Login</Link>
        </nav>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/personal" element={<PersonalArea />} />
            <Route path="/patients" element={<PatientsList />} />
            <Route path="/doctorLogin" element={<DoctorLogin />} />
            <Route path="/doctorMenu" element={<DoctorMenu />} />
            <Route path="/creatAppointments" element={<CreatAppointments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
