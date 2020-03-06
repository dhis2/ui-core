import React from 'react'
import { storiesOf } from '@storybook/react'
import { CustomDataProvider } from '@dhis2/app-runtime'
//import { Provider } from '@dhis2/app-runtime'

import { HeaderBar } from '../index.js'

const customData = {
    'system/info': {
        systemName: 'Foobar',
        contextPath: 'https://play.dhis2.org/2.32.0',
    },
    me: {
        name: 'John Doe',
        email: 'john_doe@dhis2.org',
        settings: {
            keyUiLocale: 'en',
        },
    },
    'action::menu/getModules': {
        modules: [
            {
                name: 'dhis-web-dashboard',
                namespace: '/dhis-web-dashboard',
                defaultAction: '../dhis-web-dashboard/index.action',
                displayName: 'Dashboard',
                icon: '../icons/dhis-web-dashboard.png',
                description: '',
            },
            {
                name: 'dhis-web-data-visualizer',
                namespace: '/dhis-web-data-visualizer',
                defaultAction: '../dhis-web-data-visualizer/index.action',
                displayName: 'Data Visualizer',
                icon: '../icons/dhis-web-data-visualizer.png',
                description: '',
            },
            {
                name: 'dhis-web-capture',
                namespace: '/dhis-web-capture',
                defaultAction: '../dhis-web-capture/index.action',
                displayName: 'Capture',
                icon: '../icons/dhis-web-capture.png',
                description: '',
            },
            {
                name: 'dhis-web-maintenance',
                namespace: '/dhis-web-maintenance',
                defaultAction: '../dhis-web-maintenance/index.action',
                displayName: 'Maintenance',
                icon: '../icons/dhis-web-maintenance.png',
                description: '',
            },
            {
                name: 'dhis-web-maps',
                namespace: '/dhis-web-maps',
                defaultAction: '../dhis-web-maps/index.action',
                displayName: 'Maps',
                icon: '../icons/dhis-web-maps.png',
                description: '',
            },
            {
                name: 'dhis-web-event-reports',
                namespace: '/dhis-web-event-reports',
                defaultAction: '../dhis-web-event-reports/index.action',
                displayName: 'Event Reports',
                icon: '../icons/dhis-web-event-reports.png',
                description: '',
            },
            {
                name: 'dhis-web-interpretation',
                namespace: '/dhis-web-interpretation',
                defaultAction: '../dhis-web-interpretation/index.action',
                displayName: 'Interpretations',
                icon: '../icons/dhis-web-interpretation.png',
                description: '',
            },
            {
                name: 'dhis-web-importexport',
                namespace: '/dhis-web-importexport',
                defaultAction: '../dhis-web-importexport/index.action',
                displayName: 'Import/Export',
                icon: '../icons/dhis-web-importexport.png',
                description: '',
            },
            {
                name: 'WHO Metadata browser',
                namespace: 'WHO Metadata browser',
                defaultAction:
                    'https://play.dhis2.org/2.32.0/api/apps/WHO-Metadata-browser/index.html',
                displayName: '',
                icon:
                    'https://play.dhis2.org/2.32.0/api/apps/WHO-Metadata-browser/icons/medicine-48.png',
                description: '',
            },
            {
                name: 'Dashboard Classic',
                namespace: 'Dashboard Classic',
                defaultAction:
                    'https://play.dhis2.org/2.32.0/api/apps/Dashboard-Classic/index.html',
                displayName: '',
                icon:
                    'https://play.dhis2.org/2.32.0/api/apps/Dashboard-Classic/icon.png',
                description: 'DHIS2 Legacy Dashboard App',
            },
        ],
    },
    'me/dashboard': {
        unreadInterpretations: 10,
        unreadMessageConversations: 5,
    },
}

const customLogo = {
    ...customData,
    'staticContent/logo_banner': {
        images: {
            png: 'https://via.placeholder.com/150x50',
        },
    },
}

storiesOf('Organism/HeaderBar', module)
    .add('Default', () => (
        <CustomDataProvider data={customData}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    ))
    .add('Custom Logo (wide dimension)', () => (
        <CustomDataProvider data={customLogo}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    ))
    .add('Loading...', () => (
        <CustomDataProvider options={{ loadForever: true }}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    ))
    .add('Error!', () => (
        <CustomDataProvider data={{}}>
            <HeaderBar appName="Example!" />
        </CustomDataProvider>
    ))

/*
 * Uncomment this story to test against a real API
 */

/*
    .add('Real API', () => (
        <Provider config={{
            apiVersion: '33',
            baseUrl: 'https://dhis2.vardevs.se/dev',
        }}>
            <HeaderBar appName="Real API" />
        </Provider>
    ))
    */
