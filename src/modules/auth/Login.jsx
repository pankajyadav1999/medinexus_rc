import React, { Component } from "react";
import { withRouter } from "../../layouts/withRouter";
import "../../App.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = () => {
    const { username, password } = this.state;
    if (username === "Admin" && password === "A@123") {
      localStorage.setItem("token", "dummy_token");
      this.props.router.navigate("/dashboard"); // use navigate from withRouter
    } else {
      alert("Invalid credentials");
    }
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">MediNexus Hospital</h2>
          <p className="login-subtitle">Sign in to your account</p>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            className="login-input"
          />
          <button onClick={this.handleLogin} className="login-btn">Login</button>
          <p className="login-footer">Username: Admin | Password: A@123</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
