import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import "react-big-calendar/lib/css/react-big-calendar.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

import store from './store'

import Auth from './Auth'
import Charts from './Charts/Charts';
import List from './List';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Auth>
          <List/>
          <Charts/>
        </Auth>
        <p style={{paddingTop: 50}}>&copy; 2017 BrodaczeGroup</p>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();