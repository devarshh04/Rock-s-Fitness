import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="service-container">
      <h1 className="service-heading">Our Services</h1>

      <div className="service-grid">
        <div className="service-section">
          <h2 className="service-title">General Training</h2>
          <p className="service-description">
            Our general training programs are designed to improve your overall
            fitness. Whether you’re a beginner or an experienced athlete, we
            have plans to help you meet your goals.
          </p>
        </div>

        <div className="service-section">
          <h2 className="service-title">Personal Training</h2>
          <p className="service-description">
            Work one-on-one with our certified trainers who will craft a
            tailored fitness plan based on your individual needs, preferences,
            and goals.
          </p>
        </div>

        <div className="service-section">
          <h2 className="service-title">Group Workouts</h2>
          <p className="service-description">
            Enjoy the motivation and camaraderie of group training sessions. Our
            group workouts offer variety and community support for all fitness
            levels.
          </p>
        </div>

        <div className="service-section">
          <h2 className="service-title">Diet Counselling</h2>
          <p className="service-description">
            We offer personalized diet and nutrition counseling to complement
            your training program. Learn how to eat healthier and fuel your body
            for optimal performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
