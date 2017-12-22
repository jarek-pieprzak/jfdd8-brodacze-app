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
    )
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <div>
            E-mail
          <input
            onChange={this.handleChange}
            name="email"
          />
          </div>

          <div>
            Password
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
          />
          </div>

          <button>SIGN UP</button>
        </form>
      </div>
    )
  }
}

export default SignUp