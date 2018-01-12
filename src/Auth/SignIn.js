import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SignIn.css'
import { signIn } from '../state/auth';

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
        <h1>Logowanie</h1>
        { this.state.error && <p style={{ color: 'red' }}>{this.state.error.message}</p>}
        <form
          onSubmit={this.handleSubmit}
        >
          <div className="adres">
            Adres e-mail :
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            required
          />
          </div>

          <div className="haslo">
            Hasło :
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            required
          />
          </div>
          <button>Zaloguj</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { signIn }
)(SignIn)