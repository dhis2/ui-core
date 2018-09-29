/** @format */

import React from 'react'
import HeaderBar from 'ui/widgets/HeaderBar'

const props = {
    title: 'Demo - Sierra Leone',
    selection: 'ANC: 1-4 visits by districts this year',
    profile: {
        name: 'John Doe',
        email: 'john_doe@dhis2.org',
    },
    apps: [
        {
            name: 'Dashboard',
            path: '',
            img: '',
        },
        {
            name: 'Data Visualizer',
            path: '',
            img: '',
        },
        {
            name: 'Capture',
            path: '',
            img: '',
        },
        {
            name: 'Maintenance',
            path: '',
            img: '',
        },
        {
            name: 'Maps',
            path: '',
            img: '',
        },
        {
            name: 'Event Reports',
            path: '',
            img: '',
        },
        {
            name: 'Interpretations',
            path: '',
            img: '',
        },
        {
            name: 'Messaging',
            path: '',
            img: '',
        },
        {
            name: 'Import/Export',
            path: '',
            img: '',
        },
        {
            name: 'User Settings',
            path: '',
            img: '',
        },
    ],
}

export default function HeaderBarDemo() {
    return (
        <div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="blue" {...props} />
            </div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="white" {...props} />
            </div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="transparent" {...props} />
            </div>
        </div>
    )
}
