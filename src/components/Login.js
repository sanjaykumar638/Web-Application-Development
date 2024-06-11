// Login.js
import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: '',
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
    const { username, password } = this.state;
    // Perform validation against a predefined list or backend
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Logged in successfully');
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <div>
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default Login;

