import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    weight: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload = {
      ...formData,
      age: Number(formData.age),
      weight: Number(formData.weight)
    };

    try {
      const response = await fetch("https://localhost:7270/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        // נסיון לקרוא את הטקסט של השגיאה מהשרת (אם קיים)
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.error || `Error ${response.status}`);
      }

      setSuccess("ההרשמה הצליחה!");
      setFormData({
        id: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: "",
        weight: ""
      });
    } catch (err) {
      setError("שגיאה בהרשמה: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          name="id"
          placeholder="תעודת זהות"
          value={formData.id}
          onChange={handleChange}
          required
          className="auth-input"
        />
        <input
          name="firstName"
          placeholder="שם פרטי"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="auth-input"
        />
        <input
          name="lastName"
          placeholder="שם משפחה"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="auth-input"
        />
        <input
          name="phoneNumber"
          placeholder="מספר טלפון"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="auth-input"
        />
        <input
          name="age"
          type="number"
          placeholder="גיל"
          value={formData.age}
          onChange={handleChange}
          min="0"
          required
          className="auth-input"
        />
        <input
          name="weight"
          type="number"
          placeholder="משקל"
          value={formData.weight}
          onChange={handleChange}
          min="0"
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "שולח..." : "Create Account"}
        </button>
      </form>
      {error && <p style={{color: "red", marginTop: "10px"}}>{error}</p>}
      {success && <p style={{color: "green", marginTop: "10px"}}>{success}</p>}
    </div>
  );
}
