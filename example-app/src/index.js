import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setDirAndThemeAttributes from 'ui/utils/setDirAndThemeAttributes';

const dummyUserSettings = {
    keyUiLocale: 'en_US',
    keyCurrentStyle: 'light_blue/light_blue.css',
};

setDirAndThemeAttributes(dummyUserSettings);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
