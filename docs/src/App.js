import React from 'react'

import Sidebar from './Sidebar'
import Content from './Content'

import './App.css'
import './reset.css'

export default function App() {
    return (
        <div className="container">
            <Sidebar />
            <Content />
        </div>
    )
}
