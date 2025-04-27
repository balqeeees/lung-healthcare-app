import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../index.css";

import Login from "../pages/Auth/login"
import ForgotPassword from "../pages/Auth/forgotPassword";

import Dashboard from "../pages/Doctors/Dashboard";
import PatientDetails from "../pages/Doctors/PatientDetails";

import TechnicianPage from "../pages/Technician/TechnicianPage";
import PatientPage from "../pages/Patient/PatientPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/doctor/dashboard" element={<Dashboard />} />
        <Route path="/doctor/patient/:id" element={<PatientDetails />} />

        <Route path="/technician" element={<TechnicianPage />} />

        <Route path="/patient" element={<PatientPage />} />
      </Routes>
    </Router>
  );
}
