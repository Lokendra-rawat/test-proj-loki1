import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import PersonalizedWorkoutPlanner from "./components/modal";
import WorkoutPlan from "./components/workoutPlan";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={PersonalizedWorkoutPlanner} />
        <Route path="/workout-plan" component={WorkoutPlan} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalizedWorkoutPlanner />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
