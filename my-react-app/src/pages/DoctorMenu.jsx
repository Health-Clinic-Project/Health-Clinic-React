import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorMenu() {

  const [formData, setFormData] = useState({ id: "", firstName: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      navigate("/creatAppointments");
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Example of a simple dashboard page
  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>ברוך הבא, ד"ר .....</h2>
      <form onSubmit={handleSubmit}>

       
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            margin: 10,
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "מתחבר..." : "יומן יומי"}
        </button>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            margin: 10,
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "מתחבר..." : "פתיחת יומן שבועי"}
        </button>

      </form>

      {error && (
        <p style={{ color: "red", marginTop: "15px", textAlign: "center" }}>
          {error}
        </p>
      )}
    </div>
  );
}
