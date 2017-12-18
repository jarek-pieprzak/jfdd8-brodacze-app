import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Popover from './Popover';

import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  <Popover />,

  document.getElementById('root'));
registerServiceWorker();
