import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar } from '../src'
import { Indeterminate } from '../src/icons/Checkbox'

const Wrapper = fn => (
    <div
        style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
            paddingLeft: 16,
        }}
    >
        {fn()}
    </div>
)

storiesOf('AlertBar', module)
    .addDecorator(Wrapper)
    .add('Default', () => <AlertBar>Default - I will autohide</AlertBar>)
    .add('States', () => (
        <React.Fragment>
            <AlertBar permanent>Default (info)</AlertBar>
            <AlertBar permanent success>
                Success
            </AlertBar>
            <AlertBar permanent warning>
                Warning
            </AlertBar>
            <AlertBar permanent critical>
                Critical
            </AlertBar>
        </React.Fragment>
    ))
    .add('Auto hiding', () => (
        <React.Fragment>
            <AlertBar permanent>Permanent never auto-hides</AlertBar>
            <AlertBar warning>Warning never auto-hides</AlertBar>
            <AlertBar critical>Critial never auto-hides</AlertBar>
            <AlertBar duration={10000}>
                Custom duration, hides after 10s
            </AlertBar>
            <AlertBar>Default auto-hides after 5s</AlertBar>
        </React.Fragment>
    ))
    .add('With actions', () => (
        <AlertBar
            permanent
            actions={[
                { label: 'Save', onClick: () => {} },
                { label: 'Cancel', onClick: () => {} },
            ]}
        >
            With Actions
        </AlertBar>
    ))
    .add('Icons', () => (
        <React.Fragment>
            <AlertBar permanent>Default icon</AlertBar>
            <AlertBar permanent icon={false}>
                No icon
            </AlertBar>
            <AlertBar permanent icon={<Indeterminate />}>
                Custom icon
            </AlertBar>
        </React.Fragment>
    ))
    .add('Text overflow', () => (
        <React.Fragment>
            <AlertBar permanent>Short text</AlertBar>
            <AlertBar permanent>
                If the alert bar gets a ver long text, it will grow to a maximum
                of 600px and the text will overflow across several lines. If
                there are multiple AlertBars in a stack, they will all grow to
                the size of the widest sibling.
            </AlertBar>
        </React.Fragment>
    ))
