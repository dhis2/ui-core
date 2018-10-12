import React from 'react'
import HeaderBar from 'ui/widgets/HeaderBar/HeaderBar.Component'
import { Col } from '../../../helpers'

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

function getProps() {
    return {
        ...props,
        messages: {
            count: Math.floor(Math.random() * 40),
        },
        interpretations: {
            count: Math.floor(Math.random() * 20),
        },
    }
}

const types = ['blue', 'white', 'transparent']

export class HeaderBarDemo extends React.Component {
    static id = 'headerbar'

    render() {
        return (
            <Col style={{ marginBottom: 250 }}>
                {types.map(type => (
                    <div key={`headerbar-${type}`} style={{ marginBottom: 20 }}>
                        <HeaderBar type={type} {...getProps()} />
                    </div>
                ))}
            </Col>
        )
    }
}
