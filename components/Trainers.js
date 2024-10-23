import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Trainers.css";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/trainers/")
      .then((response) => {
        setTrainers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the trainers!", error);
      });
  }, []);

  return (
    <div className="trainers-container">
      <h2>Meet Our Trainers</h2>
      <div className="trainer-cards">
        {trainers.map((trainer) => (
          <div className="trainer-card" key={trainer.id}>
            <img
              src={trainer.image}
              alt={trainer.name}
              className="trainer-image"
            />
            <h3>{trainer.name}</h3>
            <p>
              <strong>Specialization:</strong> {trainer.specialization}
            </p>
            <p>
              <strong>Experience:</strong> {trainer.experience} years
            </p>
            <p>
              <strong>Email:</strong>
              {trainer.email}
            </p>
            <p>{trainer.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
