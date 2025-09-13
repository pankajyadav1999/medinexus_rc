import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./modules/auth/Login";
import Dashboard from "./modules/dashboard/Dashboard";
import PatientList from "./modules/patients/PatientList";
import AddPatient from "./modules/patients/AddPatient";
import DoctorList from "./modules/doctors/DoctorList";
import AddDoctor from "./modules/doctors/AddDoctor";
import ScheduleAppointment from "./modules/appointments/ScheduleAppointment";

export default class App extends Component {
  isAuthenticated = () => !!localStorage.getItem("token");

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard/*"
            element={
              this.isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
            }
          >
            <Route path="patients/list" element={<PatientList />} />
            <Route path="patients/add" element={<AddPatient />} />
            <Route path="doctors/list" element={<DoctorList />} />
            <Route path="doctors/add" element={<AddDoctor />} />
            <Route path="appointments/schedule" element={<ScheduleAppointment />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}
