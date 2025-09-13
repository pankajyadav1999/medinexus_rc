import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { withRouter } from "../../layouts/withRouter";
import "../../App.css";

class MainLayout extends Component {
  state = { sidebarOpen: true };

  toggleSidebar = () => this.setState({ sidebarOpen: !this.state.sidebarOpen });

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.navigate("/login");
  };

  render() {
    return (
      <div className="layout-container">
        <div className="top-navbar">
          <button className="hamburger" onClick={this.toggleSidebar}>☰</button>
          <h3>Hospital Dashboard</h3>
          <button className="logout-btn" onClick={this.handleLogout}>Logout</button>
        </div>
        <div className="layout-body">
          {this.state.sidebarOpen && <Sidebar />}
          <div className="main-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainLayout);
