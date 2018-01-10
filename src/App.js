import React, { Component } from 'react'
import firebase from 'firebase'
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import pocketbook from './pockebook-min-org.png';
import './Auth.css';

class Auth extends Component {
  state = {
    user: null,
    showSignIn: true
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
            <div><img src="pocketbook-min-org.png" alt="logo"/></div>
            <h1>pocketbook</h1>
            <div>
              Witaj w aplikacji zarządzającej budżetem domowym !
              Z nami zaoszczędzisz pieniądze !
            </div>
            {
              this.state.showSignIn ? <SignIn/> : <SignUp/>
            }
            <span>Pierwszy raz z pocketbook? </span>
            <button onClick={() => this.setState({showSignIn: !this.state.showSignIn})}>
              załóż konto
            </button>
          </div>
        )
    )
  }
}

export default Auth