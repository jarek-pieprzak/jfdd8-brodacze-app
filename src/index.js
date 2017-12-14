import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './index.css';
import App from './App';
import Calendar from './Calendar';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/calendar" component={Calendar}/>
      </Switch>
      <p>&copy; 2017 Brodacze-Group</p>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
