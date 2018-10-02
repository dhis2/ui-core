/** @format */

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import { setDir } from 'ui/utils'

setDir('en_US')
ReactDOM.render(<App />, document.getElementById('root'))
