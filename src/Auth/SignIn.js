import React, { Component } from 'react'
import firebase from 'firebase'
import './SignIn.css'

class SignIn extends Component {

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

    firebase.auth().signInWithEmailAndPassword(
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
        <h1>Logowanie</h1>
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

export default SignIn