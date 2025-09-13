import React, { Component } from "react";

export default class AddDoctor extends Component {
  componentDidMount() { console.log("AddDoctor mounted"); }
  componentDidUpdate() { console.log("AddDoctor updated"); }

  render() {
    return (
      <div>
        <h3>Add Doctor</h3>
      </div>
    );
  }
}
