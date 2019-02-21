import React from 'react'

import Sidebar from './Sidebar'
import Content from './Content'

import 'typeface-roboto/index.css'

import 'css/reset.css'

import './App.css'

// FOR ISOLATION TESTING OF COMPONENTS
//import './Demon.css'

export default function App() {
    return (
        <div className="container">
            <Sidebar />
            <Content />
        </div>
    )
}
