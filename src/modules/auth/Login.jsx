import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import '../../App.css';

export default class Login extends Component {
  state = { username: "", password: "", redirect: false };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "sample-token");
      this.setState({ redirect: true });
    } else alert("Invalid credentials!");
  };

  render() {
    if (this.state.redirect) return <Navigate to="/dashboard" />;

    return (
      <div className="login-container">
        <form className="login-box" onSubmit={this.handleSubmit}>
          <h2>MediNexus Login</h2>
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
