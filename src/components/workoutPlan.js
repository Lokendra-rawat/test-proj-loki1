import React from "react";

const WorkoutPlan = ({ workoutPlan }) => {
  return (
    <div className="bg-gray-100">
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)",
        }}
      >
        {/* <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"> */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-2xl">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Your Personalized Workout Plan
            </h2>
          </div>
          <div className="border-t border-gray-200">
            {workoutPlan.map((exercise, index) => (
              <div key={index} className="p-4">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">{exercise.name}</h3>
                  <p className="text-gray-500">Sets: {exercise.sets}</p>
                  <p className="text-gray-500">
                    Repetitions: {exercise.repetitions}
                  </p>
                </div>
                <div className="text-gray-700">
                  <p>{exercise.instructions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
