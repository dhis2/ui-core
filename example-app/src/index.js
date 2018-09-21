/** @format */

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import setTextDirection from 'ui/utils/setTextDirection'

const dummyUserSettings = {
    keyUiLocale: 'en_US',
}

setTextDirection(dummyUserSettings)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
