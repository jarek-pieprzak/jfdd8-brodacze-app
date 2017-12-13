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

import List from './List'
// import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/list" component={List}/>
      </Switch>

      <p>&copy; 2017 Bearded Team</p>
    </div>
  </Router>,


  document.getElementById('root'));

registerServiceWorker();
