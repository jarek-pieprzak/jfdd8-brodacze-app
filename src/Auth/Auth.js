import React, { Component } from 'react'
import firebase from 'firebase'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import './Auth.css';

class Auth extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => this.setState({ user })
    )
  }

  render() {
    return (
      this.state.user
        ? this.props.children
        : (
          <div>
            <SignIn/>
            <SignUp/>
          </div>
        )
    )
  }
}

export default Auth