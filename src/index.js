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

setupFirebase();

ReactDOM.render(
  <Router>
    <div>
      <Auth>
        <List/>
        <Charts/>
      </Auth>

      <p style={{ paddingTop: 50 }}>&copy; 2017 BrodaczeGroup</p>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();