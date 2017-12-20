import React, { Component } from 'react';
import {  } from 'reactstrap';

class Logpage extends Component {


  render() {
    return (
      <div className="Log">
        <header className="Log-header">
          <img src="pocketbook-min-org.png" className="Log-logo" alt="logo" />
          <h1 className="Log-title">Welcome to Pocketbook</h1>
        </header>
        <p className="Log-intro">
          Start saving your money with Us.
        </p>
      </div>
    );
  }
}
export default Logpage;