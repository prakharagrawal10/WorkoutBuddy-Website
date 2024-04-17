// import { useEffect, useState } from "react"

// // components
// import WorkoutDetails from "../components/WorkoutDetails"
// import WorkoutForm from "../components/WorkoutForm"


// const Home = () => {
//   const [workouts, setWorkouts] = useState(null)

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch('/api/workout')
//       const json = await response.json()

//       if (response.ok) {
//         setWorkouts(json)
//       }
//     }

//     fetchWorkouts()
//   }, [])

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map(workout => (
//           <WorkoutDetails workout={workout} key={workout._id} />
//         ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   )
// }

// export default Home


// Home.js
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
