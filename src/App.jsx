import { useState } from 'react';
import { workouts } from "./assets/asset";
import Workout from './components/Workout';

export default function App() {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  function handleWorkoutComplete(workoutTitle) {
    setCompletedWorkouts((prev) => [...prev, workoutTitle]);
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Choose a workout</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {workouts.map((workout) => (
            <li key={workout.title}>
              <Workout
                {...workout}
                onComplete={() => handleWorkoutComplete(workout.title)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Completed workouts</h2>
        <ul className="list-disc list-inside">
          {completedWorkouts.map((title, idx) => (
            <li key={idx}>{title}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
