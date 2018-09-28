/** @format */

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import { setTextDirection } from 'ui/utils'

const exampleSettings = {
    keyUiLocale: 'en_US',
}

setTextDirection(exampleSettings)
ReactDOM.render(<App />, document.getElementById('root'))
