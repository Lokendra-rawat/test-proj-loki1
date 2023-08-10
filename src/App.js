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
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
