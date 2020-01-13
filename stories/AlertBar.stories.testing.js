import React from 'react'
import { storiesOf } from '@storybook/react'
import { AlertBar } from '../src'

storiesOf('AlertBar', module)
    .add('Default timeout', () => (
        <AlertBar>Default - I will autohide</AlertBar>
    ))
    .add('Custom timeout', () => (
        <AlertBar duration={2000}>Custom duration, hides after 2s</AlertBar>
    ))
    .add('Actions', () => (
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
