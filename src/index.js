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

import LogPage from './LogPage/LogPage';
import Charts from './Charts';
import DonutChart from './DonutChart';
import Bar from './Bar';
import Popover from './Popover';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAkVekVE80S1geyyLg2FzZe_vjkC25Nk9w",
  authDomain: "budget-app-brodacze-group.firebaseapp.com",
  databaseURL: "https://budget-app-brodacze-group.firebaseio.com",
  projectId: "budget-app-brodacze-group",
  storageBucket: "budget-app-brodacze-group.appspot.com",
  messagingSenderId: "284040962744"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <div>
      <Popover />
      <Charts/>
      <Switch>
        <Route exact path="/logpage" component={LogPage}/>
      </Switch>

      <p style={{ paddingTop: 50 }}>&copy; 2017 BrodaczeGroup</p>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
