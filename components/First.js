import React from "react";
import { Link } from "react-router-dom";

function First() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114163.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        color: "black",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <p
          style={{
            fontSize: "1.2rem",
            color: "white",
            letterSpacing: "1px",
            marginBottom: "20px",
          }}
        >
          ROCK'S FITNESS / AHMEDABAD'S FRIENDLIEST FITNESS STUDIO
        </p>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#fff",
            margin: "0",
          }}
        >
          TIRED OF GYMS BEING
        </h1>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#fff",
            margin: "0",
          }}
        >
          CROWDED
        </h1>
        <p
          style={{
            fontSize: "4rem",
            color: "#4f4354",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          ?
        </p>
        <h2
          style={{
            fontSize: "2rem",
            color: "#ddd",
            fontWeight: "normal",
            marginBottom: "30px",
          }}
        >
          A REASON TO COME SAY HELLO!
        </h2>
        <Link to="/register">
          <button
            style={{
              padding: "10px 30px",
              fontSize: "1.2rem",
              backgroundColor: "#4f4354",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#341f97")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6c5ce7")}
          >
            BOOK A TRIAL
          </button>
        </Link>
      </div>
    </div>
  );
}

export default First;
