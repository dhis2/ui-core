import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-rubik/index.css';
import 'material-design-icons/iconfont/material-icons.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
