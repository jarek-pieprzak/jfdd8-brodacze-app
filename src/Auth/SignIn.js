import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../state/auth';
import './SignIn.css'

class SignIn extends Component {

  state = {
    email: '',
    password: '',
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.signIn(
      this.state.email,
      this.state.password
    ).catch(
      error => this.setState({ error })
    )
  };

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error.message}</p>}
        <form
          onSubmit={this.handleSubmit}
        >
          <div className="adres">
            E-mail :
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            required
          />
          </div>

          <div className="haslo">
            Password :
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            required
          />
          </div>
          <button className={'button-log'}>Log in</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { signIn }
)(SignIn)