import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setTextDirection from 'ui/utils/setTextDirection';

const dummyUserSettings = {
    keyUiLocale: 'en_US',
    keyCurrentStyle: 'light_blue/light_blue.css',
};

setTextDirection(dummyUserSettings);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
