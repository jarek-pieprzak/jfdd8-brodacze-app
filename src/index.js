import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

import setupFirebase from './setupFirebase'

import Auth from './Auth'
import Charts from './Charts';
import Popover from './Popover';
import registerServiceWorker from './registerServiceWorker';

setupFirebase();

ReactDOM.render(
  <Router>
    <div>
        <Auth>
          <Popover/>
          <Charts/>
      </Auth>
      <p style={{ paddingTop: 50 }}>&copy; 2017 BrodaczeGroup</p>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
