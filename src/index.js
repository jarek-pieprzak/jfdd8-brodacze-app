import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import firebase from 'firebase'
import "react-big-calendar/lib/css/react-big-calendar.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import store from './store'

import Auth from './Auth'
import Charts from './Charts';
import List from './List';
import registerServiceWorker from './registerServiceWorker';
import pocketbook from "./img/pocketbook.png"

const handleSignOut = () => {
  firebase.auth().signOut()
};

ReactDOM.render(
  <Provider store={store}>
    <div>

      <div className="row">
        <Auth>
          <div className={"header"}>
            <img src={pocketbook} className="app-logo" alt="logo"/>
            <button onClick={handleSignOut} className={"logOutButton"}>Log Out</button>
          </div>
          <div className={"skew"}>
            <div className={"unskew"}>
              <div style={{ minHeight: "50vh"}}>
                <List className={"list"}/>
                <Charts/>
              </div>
            </div>
          </div>
        </Auth>
        <div className="col-md-12 copright">
          <p style={{paddingTop: 50}}>&copy; 2017 BrodaczeGroup</p>
        </div>
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();