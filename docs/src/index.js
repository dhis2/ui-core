import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { setDocDir } from 'utils'

setDocDir('en_US')
ReactDOM.render(<App />, document.getElementById('root'))
