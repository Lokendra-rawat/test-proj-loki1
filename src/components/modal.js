import React, { useState } from "react";
import { fetchData } from "../api";
import WorkoutPlan from "./workoutPlan";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 h-12 w-12"></div>
      <div className="ml-3 text-gray-600">
        Getting Personalized Workout Plan
      </div>
    </div>
  );
};

const PersonalizedWorkoutPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      age: formData.get("age"),
      gender: formData.get("gender"),
      fitness_level: formData.get("fitness-level"),
      target_muscle: formData.get("target-muscle"),
      workout_duration: formData.get("workout-duration"),
    };

    setLoading(true);
    fetchData(data).then((response) => {
      setData(response);
      setLoading(false);
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (data !== null) {
    return <WorkoutPlan workoutPlan={data} />;
  }

  return (
    <div className="App">
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3175&q=80)",
        }}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Personalized Workout Planner
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="fitness-level"
                className="block text-sm font-medium text-gray-700"
              >
                Fitness Level:
              </label>
              <select
                id="fitness-level"
                name="fitness-level"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              >
                <option value="">Select</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="target-muscle"
                className="block text-sm font-medium text-gray-700"
              >
                Target Muscle Groups:
              </label>
              <select
                id="target-muscle"
                name="target-muscle"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              >
                <option value="">Select</option>
                <option value="chest">Chest</option>
                <option value="back">Back</option>
                <option value="legs">Legs</option>
                <option value="arms">Arms</option>
                <option value="shoulders">Shoulders</option>
                <option value="abs">Abs</option>
                <option value="full-body">Full Body</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="workout-duration"
                className="block text-sm font-medium text-gray-700"
              >
                Desired Workout Duration:
              </label>
              <select
                id="workout-duration"
                name="workout-duration"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              >
                <option value="">Select</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1 hour 30 minutes</option>
                <option value="120">2 hours</option>
                <option value="more-than-120">More than 2 hours</option>
              </select>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">
                Select Specific Exercises or Choose a General Workout Plan:
              </p>
              {/* Your options for selecting specific exercises or choosing a general workout plan can be added here */}
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700"
            >
              Create Workout Plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedWorkoutPlanner;
