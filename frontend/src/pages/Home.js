import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home1">
      <div className="intro">
        <h1>Welcome to Workout Buddy</h1>
        <p>Your go-to app for tracking and adding workouts!</p>
      </div>
      <div className="buttons">
        <Link to="/workouts">
          <button className="btn">View Workouts</button>
        </Link>
        <Link to="/add-workout">
          <button className="btn">Add Workout</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;







