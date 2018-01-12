import React, { Component } from 'react'
import firebase from 'firebase'
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import pocketbook from "./pocketbook.png"
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
            <div><img src={pocketbook} className="app-logo" alt="logo"/></div>
            <h1>pocketbook</h1>
            <div>
              Witaj w aplikacji zarządzającej budżetem domowym !
              Z nami zaoszczędzisz pieniądze !
            </div>
            {
             this.state.showSignIn ? <SignIn/> : <SignUp/>
            }
            {
              this.state.showSignIn ?
                <span>Pierwszy raz z pocketbook? </span>
                :
                <span>Masz już konto? </span>
            }
            {
              this.state.showSignIn ?

                <button onClick={() => this.setState({showSignIn: !this.state.showSignIn})}>
              załóż konto
            </button> : <button onClick={() => this.setState({showSignIn: !this.state.showSignIn})}>
                  zaloguj się
                </button>
            }
                </div>
        )
    )
  }
}

export default Auth


// import firebase from 'firebase'
//
// const initialState = {
//   user: null
// };
//
// let unsubscribe = null;
// export const enableSync = () => dispatch => {
//   dispatch(disableSync());
//   unsubscribe = firebase.auth().onAuthStateChanged(
//     user => dispatch({ type: 'auth/SET_USER', user }),
//     error => console.log(error,
//       () => console.log('done')
//     )
// };
//
// export const disableSync = () => dispatch => {
//   if (unsubscribe !== null) {
//     unsubscribe()
//   }
// };
//
// export const signIn = (...args) => dispatch => {
//   return firebase.auth().signInWithEmailAndPassword(...args)
// };
//
// export const signUp = (email, password) => dispatch => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password)
// };
//
// export const signOut = () => dispatch => {
//   firebase.auth().signOut()
// };
//
// export default (state = initialState, action = {}) => {
//   switch(action.type) {
//     case 'auth/SET_USER':
//       return {
//         user: action.user
//       };
//     default:
//       return state
//   }
// }