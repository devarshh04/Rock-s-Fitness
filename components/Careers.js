import React, { useState } from "react";
import axios from "axios";

const Careers = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    position: "Club Manager",
    preferred_location: "Vastrapur",
    linkedin_profile: "",
    other_details: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    axios
      .post("http://localhost:8080/api/submit-application/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Application submitted successfully!");
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        alert(
          "There was an error submitting the application! " +
            (error.response ? error.response.data.error : error.message)
        );
      });
  };

  return (
    <div>
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#6c5ce7",
          padding: "50px 0",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>Careers</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Discover Your Potential
        </p>
      </div>

      {/* Introduction Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#3c3c7e", fontSize: "2rem" }}>
          The Right Place For You
        </h2>
        <p style={{ fontSize: "1rem", margin: "20px 0" }}>
          Founded in 2002, we are the innovators of the 24/7 fitness concept.
          Over the span of 21 years, Anytime Fitness has become the world’s
          largest 24/7 fitness franchise, with thousands of clubs in more than
          40+ countries. But we couldn’t do it without the hard work and
          dedication of a great group of people, and we are always on the
          lookout for more.
        </p>
        <p style={{ fontSize: "1rem", margin: "20px 0" }}>
          If you are looking for a career in fitness, or just want to stay fit
          and healthy, then we at Anytime Fitness want to offer you a chance to
          become part of our amazing team and build a <b>career in gym</b>. If
          you are looking for a challenging and rewarding career as a{" "}
          <b>gym trainer</b>, then Anytime Fitness is the perfect place for you.
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #e6e6e6",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "#3c3c7e",
            marginBottom: "20px",
          }}
        >
          Apply Now For Success
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            required
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            required
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
          <select
            name="position"
            onChange={handleChange}
            required
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          >
            <option value="Club Manager">Club Manager</option>
            <option value="Trainer">Trainer</option>
            <option value="Personal Trainer">Personal Trainer</option>
            <option value="Sales Executive">Sales Executive</option>
          </select>
          <select
            name="preferred_location"
            onChange={handleChange}
            required
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          >
            <option value="Vastrapur">Vastrapur</option>
            <option value="Maninagar">Maninagar</option>
            <option value="Satellite">Satellite</option>
          </select>
          <input
            type="text"
            name="linkedin_profile"
            placeholder="Share Your LinkedIn Profile URL"
            onChange={handleChange}
            style={{
              flex: "1",
              minWidth: "calc(50% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
          <textarea
            name="other_details"
            placeholder="Other Details"
            onChange={handleChange}
            style={{
              flex: "1",
              minWidth: "calc(100% - 20px)",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
              minHeight: "100px",
            }}
          />
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            required
            style={{
              flex: "1",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "1rem",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#6c5ce7",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            marginTop: "20px",
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Careers;
