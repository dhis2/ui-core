import React from 'react'

import Sidebar from './Sidebar'
import Content from './Content'

import 'typeface-roboto/index.css'

import 'defaults/reset.css'

import './App.css'

export default function App() {
    return (
        <div className="container">
            <Sidebar />
            <Content />
        </div>
    )
}
