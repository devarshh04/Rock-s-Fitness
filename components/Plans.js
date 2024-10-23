import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Plans.css";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  // Fetch plans from the backend when the component loads
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/plans/") // Ensure the correct URL for Django API
      .then((response) => {
        setPlans(response.data); // Set the plans data from the response
      })
      .catch((error) => {
        console.error("Error fetching plans:", error); // Handle any errors
      });
  }, []);

  return (
    <div className="container">
      <h1>Gym Membership Plans</h1>
      <div className="row">
        {plans.map((plan) => (
          <div className="col-md-4" key={plan.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{plan.name}</h5>
                <p className="card-text">
                  <strong>Price:</strong> ₹{plan.price}
                </p>
                <p className="card-text">
                  <strong>Duration:</strong> {plan.duration}
                </p>
                <p className="card-text">
                  <strong>Timing:</strong> {plan.timing}
                </p>

                {/* Display boolean fields as Yes/No */}
                <p className="card-text">
                  <strong>Group Activities:</strong>{" "}
                  {plan.group_activities ? "Yes" : "No"}
                </p>
                <p className="card-text">
                  <strong>Personal Training:</strong>{" "}
                  {plan.personal_training ? "Yes" : "No"}
                </p>
                <p className="card-text">
                  <strong>Diet Counselling:</strong>{" "}
                  {plan.diet_counselling ? "Yes" : "No"}
                </p>
                <p className="card-text">
                  <strong>Sauna:</strong> {plan.sauna ? "Yes" : "No"}
                </p>
                <p className="card-text">
                  <strong>Yoga:</strong> {plan.yoga ? "Yes" : "No"}
                </p>
                <p className="card-text">
                  <strong>Female Plan:</strong>{" "}
                  {plan.female_plan ? "Yes" : "No"}
                </p>

                <p className="card-text">
                  <strong>Supplements:</strong> {plan.supplements}
                </p>
                <p className="card-text">
                  <strong>Other Services:</strong> {plan.others}
                </p>

                {/* Display available equipments (comma-separated string) */}
                <p className="card-text">
                  <strong>Available Equipments:</strong>{" "}
                  {plan.available_equipments.split(",").join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
