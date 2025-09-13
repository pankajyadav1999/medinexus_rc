import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages / Modules
import Login from "./modules/auth/Login";
import Dashboard from "./modules/dashboard/Dashboard";
import PatientList from "./modules/patients/PatientList";
import AddPatient from "./modules/patients/AddPatient";
import DoctorList from "./modules/doctors/DoctorList";
import AddDoctor from "./modules/doctors/AddDoctor";
import ScheduleAppointment from "./modules/appointments/ScheduleAppointment";

// Layout
import MainLayout from "./layouts/MainLayout/MainLayout";

export default class App extends Component {

  // Check if user is logged in
  isAuthenticated = () => !!localStorage.getItem("token");

  render() {
    return (
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard and Nested Routes */}
          <Route path="/dashboard/*" element={
            this.isAuthenticated() ? <MainLayout /> : <Navigate to="/login" />
          }>
            {/* Default dashboard page */}
            <Route index element={<Dashboard />} />

            {/* Patients */}
            <Route path="patients/PatientList" element={<PatientList />} />
            <Route path="patients/AddPatient" element={<AddPatient />} />

            {/* Doctors */}
            <Route path="doctors/list" element={<DoctorList />} />
            <Route path="doctors/add" element={<AddDoctor />} />

            {/* Appointments */}
            <Route path="appointments/schedule" element={<ScheduleAppointment />} />
          </Route>

          {/* Redirect any unknown route to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }
}
