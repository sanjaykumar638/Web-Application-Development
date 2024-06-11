// Register.js
import React, { Component } from 'react';

class Register extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    error: ''
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = this.state;
    // Perform validation against a predefined list or backend
    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {
      // Register user logic (store user data in local storage or backend)
      console.log('Registered successfully');
    }
  };

  render() {
    const { username, password, confirmPassword, error } = this.state;

    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.handleInputChange}
          />
          <button type="submit">Register</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default Register;
