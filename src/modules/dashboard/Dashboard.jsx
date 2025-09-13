// Dashboard.jsx
import React, { Component } from "react";
import DashboardChart from "./DashboardChart";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Hospital Dashboard</h2>
        <div className="dashboard-cards">
          <div className="dashboard-card">Total Patients: 120</div>
          <div className="dashboard-card">Total Doctors: 25</div>
          <div className="dashboard-card">Appointments Today: 15</div>
          <div className="dashboard-card">Revenue: $5000</div>
        </div>
        <DashboardChart />
      </div>
    );
  }
}

export default Dashboard;
