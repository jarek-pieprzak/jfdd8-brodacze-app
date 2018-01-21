import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInFacebook } from '../state/auth';

class SignInFacebook extends Component {
  render() {
    return (
      <div>
          <button>Log in with Facebook</button>
      </div>
    )
  }
}

export default connect(
  null,
  { signInFacebook }
)(SignInFacebook)