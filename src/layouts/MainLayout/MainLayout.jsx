import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { withRouter } from "../../layouts/withRouter";
import "../../App.css";

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: true, openModule: "" };
  }

  toggleSidebar = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

  toggleModule = (module) =>
    this.setState((prev) => ({
      openModule: prev.openModule === module ? "" : module
    }));

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.router.navigate("/login");
  };

  render() {
    const { sidebarOpen, openModule } = this.state;

    return (
      <div className="app-layout">
        {/* Navbar */}
        <div className="top-navbar d-flex justify-content-between align-items-center bg-secondary text-white px-3">
          <div className="d-flex align-items-center">
            <button className="btn btn-sm btn-outline-secondary me-2" onClick={this.toggleSidebar}>
              ☰
            </button>
            <h5>MediNexus Hospital</h5>
          </div>
          <button className="btn btn-outline-light" onClick={this.handleLogout}>
            Logout
          </button>
        </div>

        <div className="d-flex">
          {/* Sidebar */}
          {sidebarOpen && (
            <aside className="sidebar bg-dark text-white p-3">
              <ul className="list-unstyled">
                <li>
                  <Link className="text-white text-decoration-none" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li>
                  <div className="sidebar-link" onClick={() => this.toggleModule("patients")}>
                    Patients {openModule === "patients" ? "▲" : "▼"}
                  </div>
                  {openModule === "patients" && (
                    <ul>
                      <li>
                        <Link to="/dashboard/patients/PatientList" className="text-white text-decoration-none">
                          Patient List
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/patients/AddPatient" className="text-white text-decoration-none">
                          Add Patient
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div className="sidebar-link" onClick={() => this.toggleModule("doctors")}>
                    Doctors {openModule === "doctors" ? "▲" : "▼"}
                  </div>
                  {openModule === "doctors" && (
                    <ul>
                      <li>
                        <Link to="/dashboard/doctors/list" className="text-white text-decoration-none">Doctor List</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/doctors/add" className="text-white text-decoration-none">Add Doctor</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <div className="sidebar-link" onClick={() => this.toggleModule("appointments")}>
                    Appointments {openModule === "appointments" ? "▲" : "▼"}
                  </div>
                  {openModule === "appointments" && (
                    <ul>
                      <li>
                        <Link to="/dashboard/appointments/schedule" className="text-white text-decoration-none">Schedule</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </aside>
          )}

          {/* Main content area */}
          <main className="main-content p-3" style={{ flex: 1 }}>
            {/* This is where nested routes like Dashboard cards, Polar chart, or PatientList will render */}
            <Outlet />
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(MainLayout);
