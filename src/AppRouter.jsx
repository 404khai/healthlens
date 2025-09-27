import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";

const AppRouter = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="/Dashboard" index element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;