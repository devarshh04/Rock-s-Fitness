import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_location: "",
    plan: "Basic",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/register/", formData)
      .then((response) => {
        alert("Registration successful!");
      })
      .catch((error) => {
        console.error(
          "There was an error submitting the registration: ",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Let's Connect
      </h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Preferred Location</label>
        <input
          type="text"
          name="preferred_location"
          value={formData.preferred_location}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Plan</label>
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        >
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="VIP">Elite</option>
        </select>
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#6c5ce7",
          color: "#fff",
          borderRadius: "5px",
          border: "none",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Registration;
