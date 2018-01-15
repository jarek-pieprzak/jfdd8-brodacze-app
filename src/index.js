import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import "react-big-calendar/lib/css/react-big-calendar.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import setupFirebase from './setupFirebase'

import Auth from './Auth'
import Charts from './Charts/Charts';
import Calendar from './Calendar'
import List from './List';
import registerServiceWorker from './registerServiceWorker';
import pocketbook from "./img/pocketbook.png"

setupFirebase();

ReactDOM.render(
  <Router>
    <div>

    <div className="row">
      <Auth>
//         <div style={{

//         }}>
        <img src={pocketbook} className="app-logo" alt="logo"/>
        <button onClick={this.handleSignOut}>Wyloguj</button>
      </div>
        <List/>
        <Charts/>
      </Auth>
      <div className="col-md-12">
        <p style={{ paddingTop: 50 }}>&copy; 2017 BrodaczeGroup</p>
      </div>
    </div>
    </div>
  </Router>,

  document.getElementById('root')
);

registerServiceWorker();