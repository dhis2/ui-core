import React from 'react'

import Sidebar from './Sidebar'
import Content from './Content'

import 'typeface-roboto'

import { CssReset } from '@dhis2/ui-core'

import './App.css'

// FOR ISOLATION TESTING OF COMPONENTS
//import './Demon.css'

export default function App() {
    return (
        <div className="container">
            <CssReset />
            <Sidebar />
            <Content />
        </div>
    )
}
