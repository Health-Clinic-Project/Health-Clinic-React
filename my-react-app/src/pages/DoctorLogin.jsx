import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
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
      const response = await fetch(`https://localhost:7270/api/Doctor/${formData.id}`);
      if (response.status === 404) {
        // משתמש לא נמצא - נעבור להרשמה
        navigate("/register");
        return;
      }

      if (!response.ok) {
        throw new Error("שגיאה בשרת");
      }

      const patient = await response.json();

      if (patient.firstName.toLowerCase() === formData.firstName.trim().toLowerCase()) {
        navigate("/doctorMenu");
        // אפשר להמשיך ולשמור את הפרטים ב-localStorage או להוביל לדף האישי
        // לדוגמה:
        // localStorage.setItem("patient", JSON.stringify(patient));
        // navigate("/personal-area");
      } else {
        setError("שם פרטי או תעודת זהות שגויים");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Doctor Login</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="id" style={{ display: "block", marginBottom: "5px" }}>
          מספר רשיון רופא:
        </label>
        <input
          id="id"
          name="id"
          type="text"
          value={formData.id}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />

        <label htmlFor="firstName" style={{ display: "block", marginBottom: "5px" }}>
          שם רופא:
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "20px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />

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
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "מתחבר..." : "Login"}
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
