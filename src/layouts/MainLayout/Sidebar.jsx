import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = { openModule: "" };

  toggleModule = (module) => {
    this.setState({ openModule: this.state.openModule === module ? "" : module });
  };

  render() {
    const { openModule } = this.state;

    return (
      <div className="sidebar">
        <h3 className="sidebar-title">Hospital</h3>
        <input type="text" placeholder="Search..." className="sidebar-search" />
        <ul className="sidebar-menu">
          <li>
            <div className="sidebar-link" onClick={() => this.toggleModule("patients")}>
              Patients
            </div>
            {openModule === "patients" && (
              <ul className="sidebar-submenu">
                <li><Link to="/dashboard/patients/list">Patient List</Link></li>
                <li><Link to="/dashboard/patients/add">Add Patient</Link></li>
              </ul>
            )}
          </li>
          <li>
            <div className="sidebar-link" onClick={() => this.toggleModule("doctors")}>
              Doctors
            </div>
            {openModule === "doctors" && (
              <ul className="sidebar-submenu">
                <li><Link to="/dashboard/doctors/list">Doctor List</Link></li>
                <li><Link to="/dashboard/doctors/add">Add Doctor</Link></li>
              </ul>
            )}
          </li>
          <li>
            <div className="sidebar-link" onClick={() => this.toggleModule("appointments")}>
              Appointments
            </div>
            {openModule === "appointments" && (
              <ul className="sidebar-submenu">
                <li><Link to="/dashboard/appointments/schedule">Schedule</Link></li>
              </ul>
            )}
          </li>
          <li><Link className="sidebar-link" to="/dashboard/billing">Billing</Link></li>
          <li><Link className="sidebar-link" to="/dashboard/pharmacy">Pharmacy</Link></li>
          <li><Link className="sidebar-link" to="/dashboard/inventory">Inventory</Link></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
