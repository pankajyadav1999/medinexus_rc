import React, { Component } from "react";

export default class DoctorList extends Component {
  componentDidMount() { console.log("DoctorList mounted"); }
  componentDidUpdate() { console.log("DoctorList updated"); }

  render() {
    return (
      <div>
        <h3>Doctor List</h3>
      </div>
    );
  }
}
