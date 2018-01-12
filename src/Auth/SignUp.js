import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../state/auth';

const errorMessages = {
  'auth/email-already-in-use': 'No już mamy takie konto'
};

class SignUp extends Component {

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

    this.props.signUp(
      this.state.email,
      this.state.password
    ).catch(
      error => this.setState({ error })
    )
  };

  render() {
    return (
      <div>
        <h1>Rejestracja</h1>
        {this.state.error && <p style={{ color: 'red' }}>{errorMessages[this.state.error.code]}</p>}
        <form
          onSubmit={this.handleSubmit}
        >
          <div>
            Adres e-mail :
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            required
          />
          </div>

          <div>
            Hasło :
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            required
          />
          </div>

          <button>Zarejestruj się</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { signUp }
)(SignUp)