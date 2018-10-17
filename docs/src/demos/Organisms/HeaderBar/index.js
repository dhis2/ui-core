import React from 'react'
import HeaderBar from 'widgets/HeaderBar/HeaderBar.Component'
import { Col } from '../../../helpers'

const props = {
    instanceName: 'Sierra Leone',
    appName: 'Import / Export',
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
export class HeaderBarDemo extends React.Component {
    static id = 'headerbar'

    render() {
        return (
            <Col style={{ marginBottom: 250 }}>
                <HeaderBar {...getProps()} />
            </Col>
        )
    }
}
