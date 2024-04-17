// WorkoutListPage.js
import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const WorkoutListPage = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workout');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="workouts">
      {workouts && workouts.map(workout => (
        <WorkoutDetails workout={workout} key={workout._id} />
      ))}
    </div>
  );
};

export default WorkoutListPage;
