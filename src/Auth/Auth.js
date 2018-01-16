import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInGoogle from "./SignInGoogle";
import SignInFacebook from "./SignInFacebook"

import pocketbook from "./pocketbook.png"
import './Auth.css';

class Auth extends Component {
  state = {
    showSignIn: true
  };

  render() {
    return (
      this.props.user
        ? this.props.children
        : (
          <div>
            <div><img src={pocketbook} className="app-logo" alt="logo"/></div>
            <h1>pocketbook</h1>
            <div>
              Welcome to our home budget app !
              You will save some money with us !
            </div>
            {
              this.state.showSignIn ? {<SignIn/>,<SignInGoogle/>,<SignInFacebook/>} : <SignUp/>
            }
            {
              this.state.showSignIn ?
                <span>First time with pocketbook? </span>
                :
                <span>Have an account? </span>
            }
            {
              this.state.showSignIn ?

                <button onClick={() => this.setState({showSignIn: !this.state.showSignIn})}>
                  Register
                </button> : <button onClick={() => this.setState({showSignIn: !this.state.showSignIn})}>
                  Log in
                </button>
            }
          </div>
        )
    )
  }
}

export default connect(
    state => ({
      user: state.auth.user
    })
)(Auth)

