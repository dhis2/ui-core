import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar } from '../src'
import { AttachFile } from '../src/icons/AttachFile'

const Wrapper = fn => (
    <div
        className="alert-bars"
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
            <AlertBar className="first" permanent>
                Default (info)
            </AlertBar>
            <AlertBar className="second" permanent success>
                Success
            </AlertBar>
            <AlertBar className="thrid" permanent warning>
                Warning
            </AlertBar>
            <AlertBar className="fourth" permanent critical>
                Critical
            </AlertBar>
        </React.Fragment>
    ))
    .add('Auto hiding', () => (
        <React.Fragment>
            <AlertBar className="first" permanent>
                Permanent never auto-hides
            </AlertBar>
            <AlertBar className="second" warning>
                Warning never auto-hides
            </AlertBar>
            <AlertBar className="third" critical>
                Critial never auto-hides
            </AlertBar>
            <AlertBar
                className="fourth"
                duration={2000}
                onHidden={(payload, event) => {
                    console.log('onHidden payload', payload)
                    console.log('onHidden event', event)
                }}
            >
                Custom duration, hides after 2s
            </AlertBar>
            <AlertBar
                className="fifth"
                onHidden={(payload, event) => {
                    console.log('onHidden payload', payload)
                    console.log('onHidden event', event)
                }}
            >
                Default auto-hides after 8s
            </AlertBar>
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
            <AlertBar permanent icon={<AttachFile />}>
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
