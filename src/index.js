import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

import Popover from './Popover';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Popover />,

  document.getElementById('root'));
registerServiceWorker();
