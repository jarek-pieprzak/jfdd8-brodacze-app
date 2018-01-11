import React, { Component } from 'react'
import firebase from 'firebase'

class SignUp extends Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).catch(
      error => this.setState({
        error: error.message
      })
    )
  };

  render() {
    return (
      <div>
        <h1>Rejestracja</h1>
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

export default SignUp