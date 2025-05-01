
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import ForgotPassword from "./pages/Auth/forgotPassword";
import Dashboard from "./pages/Doctors/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import PatientDetails from "./pages/Doctors/PatientDetails";

function App() {

  return (
    <AppRoutes />
    // <Router>
    //   {/* <Dashboard /> */}
    // </Router>
  );
}

export default App
