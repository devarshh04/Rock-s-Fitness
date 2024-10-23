import React from "react";
import "../styles/reviews.css";

function Reviews() {
  return (
    <div className="cont">
      <h1 className="heading">MEMBER'S CORNER</h1>
      <div className="reviews-container">
        <div className="review">
          <div className="review-content">
            <p>
              Advance level machines are available in this gym, Staff and gym
              trainers are too good, polite, and knowledgeable. I am satisfied
              with their training services. Also they provide you with good diet
              plan if you opt for premium subscription
            </p>
          </div>
          <div className="member-info">
            <h3>GAURAV GOEL</h3>
            <p>MEMBER- ROCK'S FITNESS VASTRAPUR</p>
          </div>
        </div>
        <div className="review">
          <div className="review-content">
            <p>
              Well I have been a monthly member now getting to get along with
              the people there. It's a Great place for fitness freaks. There is
              passion in the Gym Fitness Instructors and they work towards
              getting you towards Fitness.
            </p>
          </div>
          <div className="member-info">
            <h3>PAWAN KOTHARI</h3>
            <p>MEMBER- ROCK'S FITNESS & WELLNESS SATELLITE</p>
          </div>
        </div>
        <div className="review">
          <div className="review-content">
            <p>
              I recently joined the gym and I have a been liking it so far.
              Trainers are good, they guide u well, the ambiance is motivating.
              If you are looking for top quality gym near Kankaria, I think you
              can definitely go for it.
            </p>
          </div>
          <div className="member-info">
            <h3>SNEHA BHATI</h3>
            <p>MEMBER-ROCK'S FITNESS MANINAGAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
