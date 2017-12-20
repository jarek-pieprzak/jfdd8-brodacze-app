import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "react-big-calendar/lib/css/react-big-calendar.css"
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Charts from './Charts'
import DonutChart from './DonutChart'
import Bar from './Bar'
import Popover from './Popover';
import Calendar from './Calendar'


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/donut" component={DonutChart}/>
        <Route path="/bar" component={Bar}/>
        <Route path="/calendar" component={Calendar}/>
      </Switch>

      <Popover />
      <Charts/>

      <p>&copy; 2017 BrodaczeGroup</p>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
