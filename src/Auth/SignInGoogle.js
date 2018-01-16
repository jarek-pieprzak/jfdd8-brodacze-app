import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInGoogle } from '../state/auth';

class SignInGoogle extends Component {
  render() {
    return (
      <div>
          <button>Log in with Google</button>
      </div>
    )
  }
}

export default connect(
  null,
  { signInGoogle }
)(SignInGoogle)