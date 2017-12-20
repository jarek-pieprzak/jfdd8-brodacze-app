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

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Charts from './Charts'
import DonutChart from './DonutChart'
import Bar from './Bar'
import Popover from './Popover';
import List from './List';


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/donut" component={DonutChart}/>
        <Route path="/bar" component={Bar}/>
        <Route path="/list" component={List}/>
      </Switch>

      <Popover />
      <Charts/>

      <p>&copy; 2017 BrodaczeGroup</p>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
