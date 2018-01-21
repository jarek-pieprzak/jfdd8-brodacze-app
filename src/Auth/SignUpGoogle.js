import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signUpGoogle } from '../state/auth';
import firebase from 'firebase'

// export const signUpGoogle = (...args) => dispatch => {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   return firebase.auth().signInWithPopup(provider)
// };

class SignUpGoogle extends Component {
  render() {
    return (
      <div>
          <button>Log in with Google account</button>
      </div>
    )
  }
}

export default connect(
  null,
  { signUpGoogle }
)(SignUpGoogle)