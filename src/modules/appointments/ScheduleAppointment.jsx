import React, { Component } from "react";

export default class ScheduleAppointment extends Component {
  componentDidMount() { console.log("ScheduleAppointment mounted"); }
  componentDidUpdate() { console.log("ScheduleAppointment updated"); }

  render() {
    return (
      <div>
        <h3>Schedule Appointment</h3>
      </div>
    );
  }
}
