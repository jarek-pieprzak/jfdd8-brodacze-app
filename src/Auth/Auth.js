import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
                    <div class="background">
                        <div class="transbox">
                            <div><img src={pocketbook} className="app-logo" alt="logo"/></div>
                            <h1 style={{"text-decoration":"line-through"}}>pocketbook</h1>
                            <div>
                                <h2>
                                Welcome to our home budget app !
                                You will save some money with us !
                                </h2>
                            </div>
                            {
                                this.state.showSignIn ? <SignIn/> : <SignUp/>
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

