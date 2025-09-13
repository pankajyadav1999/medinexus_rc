import React, { Component } from "react";

export default class PatientList extends Component {
  componentDidMount() {
    console.log("PatientList mounted");
  }
  componentDidUpdate() {
    console.log("PatientList updated");
  }

  render() {
    return (
      <div>
        <h3>Patient List</h3>
        <p>This is static patient list (placeholder). Replace with API data later.</p>
      </div>
    );
  }
}
